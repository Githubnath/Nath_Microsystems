const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const Payment = require('../models/Payment');
const sendEmail = require('../utils/sendEmail');

router.post('/flutterwave', express.raw({ type: 'application/json' }), async (req, res) => {
  const hash = crypto.createHmac('sha256', process.env.FLUTTERWAVE_SECRET_KEY).update(req.body).digest('hex');
  const signature = req.headers['verif-hash'];

  if (!signature || signature !== hash) return res.status(401).send('Unauthorized');

  const payload = JSON.parse(req.body.toString());
  const tx = payload.data;

  try {
    const payment = new Payment({
      tx_ref: tx.tx_ref,
      flw_ref: tx.flw_ref,
      status: tx.status,
      currency: tx.currency,
      amount: tx.amount,
      customer: {
        name: tx.customer.name,
        email: tx.customer.email
      },
      payment_type: tx.payment_type
    });

    await payment.save();

    if (tx.status === 'successful') {
      await sendEmail(tx.customer.email, 'Payment Confirmation', `<h3>Payment Successful</h3><p>TX Ref: ${tx.tx_ref}</p>`);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error(err);
    res.status(500).send('Webhook error');
  }
});

module.exports = router;


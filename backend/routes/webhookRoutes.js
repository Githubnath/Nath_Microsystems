const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const sendEmail = require('../utils/sendEmail');

// Flutterwave webhook endpoint
router.post('/flutterwave', express.json({ type: 'application/json' }), async (req, res) => {
  const signature = req.headers['verif-hash'];

  if (!signature || signature !== process.env.FLUTTERWAVE_HASH_SECRET) {
    return res.status(401).send('Unauthorized');
  }

  const payload = req.body;
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


const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/initiate-payment', async (req, res) => {
  const { name, email, amount, currency } = req.body;
  try {
    const response = await axios.post(
      'https://api.flutterwave.com/v3/payments',
      {
        tx_ref: `TX-${Date.now()}`,
        amount,
        currency,
        redirect_url: 'https://yourdomain.com/payment-status',
        customer: { name, email },
        customizations: {
          title: "Nath Microsystems Payment",
          logo: "https://yourdomain.com/logo.png",
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json({ paymentLink: response.data.data.link });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


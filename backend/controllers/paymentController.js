const axios = require('axios');
const nodemailer = require('nodemailer');
require('dotenv').config();

const FLW_SECRET_KEY = process.env.FLUTTERWAVE_SECRET_KEY;
const FLW_BASE_URL = 'https://api.flutterwave.com/v3';

// Optional: Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Init Payment
exports.initiatePayment = async (req, res) => {
  try {
    const { email, amount, currency = 'NGN', name } = req.body;

    const tx_ref = `nath-${Date.now()}`;

    const response = await axios.post(
      `${FLW_BASE_URL}/payments`,
      {
        tx_ref,
        amount,
        currency,
        redirect_url: `${process.env.CLIENT_URL}/payment-success?tx_ref=${tx_ref}`,
        customer: {
          email,
          name,
        },
        customizations: {
          title: 'Nath Microsystems Payment',
          description: 'Payment for services',
          logo: 'https://nathmicrosystems.com.ng/assets/logo.png', // Optional
        },
      },
      {
        headers: {
          Authorization: `Bearer ${FLW_SECRET_KEY}`,
        },
      }
    );

    res.status(200).json({
      status: 'success',
      paymentLink: response.data.data.link,
    });
  } catch (error) {
    console.error('Payment initiation error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to initiate payment' });
  }
};

// Flutterwave Webhook
exports.flutterwaveWebhook = async (req, res) => {
  const hash = req.headers['verif-hash'];
  if (!hash || hash !== process.env.FLW_HASH) {
    return res.status(401).send('Unauthorized');
  }

  const payload = req.body;
  const event = payload.event;

  if (event === 'charge.completed' && payload.data.status === 'successful') {
    const paymentData = payload.data;
    const email = paymentData.customer.email;
    const name = paymentData.customer.name;
    const amount = paymentData.amount;
    const tx_ref = paymentData.tx_ref;
    const currency = paymentData.currency;

    // Send email to user
    try {
      await transporter.sendMail({
        from: `"Nath Microsystems" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Payment Successful',
        html: `
          <h2>Thank you for your payment, ${name}!</h2>
          <p>Amount: <strong>${currency} ${amount}</strong></p>
          <p>Transaction Ref: <strong>${tx_ref}</strong></p>
        `,
      });
    } catch (err) {
      console.error('Failed to send email:', err.message);
    }
  }

  return res.status(200).send('Webhook received');
};


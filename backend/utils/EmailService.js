// utils/EmailService.js

const nodemailer = require('nodemailer');

const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Ensure EMAIL_PASS is an app-specific password
    },
  });

  // Optional: Verify the transporter connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ Email transporter verification failed:', error.message);
    } else {
      console.log('✅ Email transporter is ready to send messages');
    }
  });

  return transporter;
};

module.exports = createTransporter;


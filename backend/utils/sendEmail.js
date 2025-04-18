// utils/sendEmail.js

const createTransporter = require('./EmailService');

const sendEmail = async ({ to, subject, text }) => {
  const transporter = createTransporter();

  try {
    await transporter.sendMail({
      from: `"Nath Microsystems" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text
    });

    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error('❌ Error sending email:', error);
  }
};

module.exports = sendEmail;


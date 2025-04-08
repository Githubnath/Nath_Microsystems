const ContactMessage = require('../models/ContactMessage');
const sendEmail = require('../utils/sendEmail');
const { validationResult } = require('express-validator');

exports.submitContactForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, message } = req.body;

  try {
    const contact = new ContactMessage({ name, email, message });
    await contact.save();

    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


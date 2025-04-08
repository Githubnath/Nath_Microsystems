const express = require('express');
const { body } = require('express-validator');
const { submitContactForm } = require('../controllers/contactController');

const router = express.Router();

router.post('/',
  [
    body('name').notEmpty(),
    body('email').isEmail(),
    body('message').notEmpty()
  ],
  submitContactForm
);

module.exports = router;


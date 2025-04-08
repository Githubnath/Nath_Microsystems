// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/nathmicrosystems',
  jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret_here',
  email: {
    user: process.env.EMAIL_USER || 'your_email@example.com',
    pass: process.env.EMAIL_PASS || 'your_email_password'
  },
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000'
};


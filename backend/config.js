// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/nathmicrosystems',
  jwtSecret: process.env.JWT_SECRET || 'K4zq1WkJz2@rTY7pVm9!uFhXs#3LcPwNx$QeZg8TbRmD',
  email: {
    user: process.env.EMAIL_USER || 'emenike.nathaniel@gmail.com',
    pass: process.env.EMAIL_PASS || 'yriq oqzm agmw iler'
  },
  clientUrl: process.env.CLIENT_URL || 'https://nath-microsystems.netlify.app'
};



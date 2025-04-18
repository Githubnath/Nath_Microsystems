// utils/emailService.js

const nodemailer = require('nodemailer');

 const createTransporter = () => {
	 const transporter = nodemailer.createTransport({
		 service: 'gmail',
		 auth: {
			 user: process.env.EMAIL_USER,      // Your Gmail address
			 pass: process.env.EMAIL_PASS       // App-specific password from Gmail
		 }
	 });

// Optional: Verify connection configuration
transporter.verify((error, success) => {
	if (error) {
		console.error('❌ Email transporter verification failed:', error.message);
		else {
			console.log('✅ Email transporter is configured correctly and ready');
		}
	});

return transporter;
};


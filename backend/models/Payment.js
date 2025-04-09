const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  tx_ref: { type: String, required: true, unique: true },
  flw_ref: String,
  status: String,
  currency: String,
  amount: Number,
  customer: {
    name: String,
    email: String
  },
  payment_type: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);


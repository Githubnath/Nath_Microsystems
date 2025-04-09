const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: String,
  comment: String,
  date: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  author: String,
  comments: [commentSchema]
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);


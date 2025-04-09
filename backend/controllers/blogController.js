const Blog = require('../models/Blog');

exports.createPost = async (req, res) => {
  const { title, content, image, author } = req.body;
  try {
    const blog = new Blog({ title, content, image, author });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create blog post' });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await Blog.find().sort({ createdAt: -1 });
  res.json(posts);
};

exports.addComment = async (req, res) => {
  const { blogId, user, comment } = req.body;
  try {
    const blog = await Blog.findById(blogId);
    blog.comments.push({ user, comment });
    await blog.save();
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add comment' });
  }
};


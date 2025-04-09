const express = require('express');
const { createPost, getPosts, addComment } = require('../controllers/blogController');
const router = express.Router();

router.post('/create', createPost);
router.get('/', getPosts);
router.post('/comment', addComment);

module.exports = router;


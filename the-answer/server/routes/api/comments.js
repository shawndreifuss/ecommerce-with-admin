const express = require('express');
const router = express.Router();
const { AddComment, FindCommentsByUser, FindCommentsByPost, UpdateComment, DeleteComment } = require('../../controllers/commentController')

// Define routes   /api/comments
router.post('/post/:id/', AddComment);
router.get('/user/:userId', FindCommentsByUser);
router.get('/post/comments/:postId', FindCommentsByPost);
router.put('/:id', UpdateComment);
router.delete('/:id', DeleteComment);

module.exports = router;

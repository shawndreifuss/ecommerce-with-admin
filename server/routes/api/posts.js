const { GetAllPosts, GetPostById, CreatePost, UpdatePost, DeletePost, LikePost, UnlikePost, isLiked  } = require('../../controllers/postController');
const router = require('express').Router();

router.get('/', GetAllPosts);
router.get('/:postId', GetPostById);
router.post('/', CreatePost);
router.put('/:postId', UpdatePost);
router.delete('/:postId', DeletePost);
router.post('/like', LikePost);
router.post('/unlike', UnlikePost);
router.get('/isliked/:postId', isLiked);



module.exports = router;
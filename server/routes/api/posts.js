const { GetAllPosts, GetPostById, CreatePost, UpdatePost, DeletePost } = require('../../controllers/postController');
const router = require('express').Router();

router.get('/', GetAllPosts);
router.get('/:id', GetPostById);
router.post('/', CreatePost);
router.put('/:id', UpdatePost);
router.delete('/:id', DeletePost);


module.exports = router;
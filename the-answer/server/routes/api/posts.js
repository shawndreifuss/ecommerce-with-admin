const { GetAllPosts } = require('../../controllers/postController');
const router = require('express').Router();

router.get('/', GetAllPosts);

module.exports = router;
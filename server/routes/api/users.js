const { GetAllUsers, GetSingleUser, GetUserQuestions, GetUserPosts } = require('../../controllers/userController');
const router = require('express').Router();

router.get('/', GetAllUsers);
router.get('/:id', GetSingleUser);
router.get('/:id/questions', GetUserQuestions);
router.get('/:userId/posts', GetUserPosts);

module.exports = router;
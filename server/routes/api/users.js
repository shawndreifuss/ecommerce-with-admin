const { GetAllUsers, GetSingleUser, GetUserQuestions, GetUserPosts, GetUserFavorites, FollowUser, UnfollowUser } = require('../../controllers/userController');
const router = require('express').Router();

router.get('/', GetAllUsers);
router.get('/:id', GetSingleUser);
router.get('/:id/questions', GetUserQuestions);
router.get('/:userId/posts', GetUserPosts);
router.get('/:userId/favorites', GetUserFavorites);
router.post('/:userId/follow/:id', FollowUser);
router.post('/:userId/unfollow/:id', UnfollowUser);


module.exports = router;
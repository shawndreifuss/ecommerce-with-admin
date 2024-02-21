const { GetAllUsers, GetSingleUser, GetUserQuestions } = require('../../controllers/userController');
const router = require('express').Router();

router.get('/', GetAllUsers);
router.get('/:id', GetSingleUser);
router.get('/:id/questions', GetUserQuestions);

module.exports = router;
const { Register, Login, OAuth, ResetPassword, ChangePassword } = require('../../controllers/authController');
const { userVerification } = require('../../middleware/authMiddleware');
const router = require('express').Router();


router.post('/register', Register);
router.post('/login', Login);
router.post('/reset-password', ResetPassword);
router.post('/reset-password/:resetToken', ChangePassword)
router.post('/oauth', OAuth);
router.post('/', userVerification)


module.exports = router;
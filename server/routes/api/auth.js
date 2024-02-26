const { Register, Login, OAuth, ResetPassword, ChangePassword, GetMe, Logout  } = require('../../controllers/authController');
const verifyToken = require('../../middleware/verifyToken');
const router = require('express').Router();



router.post('/register', Register);
router.post('/login', Login);
router.post('/reset-password', ResetPassword);
router.post('/reset-password/:resetToken', ChangePassword)
router.post('/oauth', OAuth);
router.get('/me', verifyToken, GetMe);
router.get('/logout', Logout);




module.exports = router;
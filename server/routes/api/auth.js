const { Register, Login, OAuth, ResetPassword, ChangePassword, GetUser  } = require('../../controllers/authController');
const verifyToken = require('../../middleware/verifyToken');
const router = require('express').Router();


router.post('/register', Register);
router.post('/login', Login);
router.post('/reset-password', ResetPassword);
router.post('/reset-password/:resetToken', ChangePassword)
router.post('/oauth', OAuth);
router.get('/getuser', verifyToken, GetUser);


module.exports = router;
const router = require('express').Router();
const authRoute = require('./auth');
const usersRoute = require('./users');
const postsRoute = require('./posts');


router.use('/auth', authRoute);
router.use('/users', usersRoute);
router.use('/posts', postsRoute);



module.exports = router;

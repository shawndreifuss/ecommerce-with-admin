const router = require('express').Router();
const authRoute = require('./auth');
const usersRoute = require('./users');
const postsRoute = require('./posts');
const commentsRoute = require('./comments');


router.use('/auth', authRoute);
router.use('/users', usersRoute);
router.use('/posts', postsRoute);
router.use('/comments', commentsRoute);



module.exports = router;

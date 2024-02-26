const { User } = require('../models');


//  Get All Users /api/users
module.exports.GetAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({ message: error });
    }
}

//  Get Single User /api/users/:id
module.exports.GetSingleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    }
    catch (error) {
        res.json({ message: error });
    }
}

// Get User Questions /api/users/:id/questions
module.exports.GetUserQuestions = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user.questions);
    }
    catch (error) {
        res.json({ message: error });
    }
}


// Get User Posts /api/users/:userId/posts
module.exports.GetUserPosts = async (req, res, next) => {
try {
        const user = await User.findById(req.params.userId).populate('posts');
        res.send(user.posts);
    if (!req.params.userId) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    }
    catch (error) {
        res.json({ message: error });
    }
}


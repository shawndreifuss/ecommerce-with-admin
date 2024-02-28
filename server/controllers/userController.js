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
        const user = await User.findById(req.params.id).populate('posts').populate('favorites').populate('followers').populate('following');

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

//  Get users favorite posts /api/users/:userId/favorites
module.exports.GetUserFavorites = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId).populate('favorites');
        res.send(user.favorites);
    }
    catch (error) {
        res.json({ message: error });
    }
}

//  Follow User /api/users/:userId/follow/:id
module.exports.FollowUser = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userToFollow = await User.findById(req.params.id);
        if (!userToFollow.followers.includes(currentUser._id)) {
            await userToFollow.updateOne({ $push: { followers: currentUser._id } });
            await currentUser.updateOne({ $push: { following: userToFollow._id } });
            res.json({currentUser, userToFollow, message: 'User has been followed' });
        } else {
            res.json({ message: 'You already follow this user' });
        }
    }
    catch (error) {
        res.json({ message: error });
    }
}

//  Unfollow User /api/users/:userId/unfollow/:id
module.exports.UnfollowUser = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userToUnfollow = await User.findById(req.params.id);
        if (userToUnfollow.followers.includes(currentUser._id)) {
            await userToUnfollow.updateOne({ $pull: { followers: currentUser._id } });
            await currentUser.updateOne({ $pull: { following: userToUnfollow._id } });
            res.json({currentUser, userToUnfollow, message: 'User has been unfollowed' });
        } else {
            res.json({ message: 'You do not follow this user' });
        }
    }
    catch (error) {
        res.json({ message: error });
    }
}




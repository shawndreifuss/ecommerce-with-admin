const { Post, Comment } = require('../models');

//  Get All Posts /api/posts
module.exports.GetAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        console.log(posts)
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
}
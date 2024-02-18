const { Post } = require('../models');

//  Get All Posts /api/posts
module.exports.GetAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error });
    }
}

//  Get Post by ID /api/posts/:id
module.exports.GetPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.json(post);

    }catch (error) {
        res.json({ message: error });
    }
}

//  Create Post /api/posts
module.exports.CreatePost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
}

//  Update Post /api/posts/:id
module.exports.UpdatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        res.json(post);
    }
    catch (error) {
        res.json({ message: error });
    }
}

//  Delete Post /api/posts/:id
module.exports.DeletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.json(post);
    } catch (error) {
        res.json({ message: error });
    }
}


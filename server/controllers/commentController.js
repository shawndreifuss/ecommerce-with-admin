const { Comment, Post } = require('../models')


// Add a new comment to post by id  /api/comments/post/:id
exports.AddComment = async (req, res) => {
    try {
        const postId = req.params.id; 
        const { text, author } = req.body;
        const newComment = new Comment({ 
            text, 
            author, 
            post: postId 
        });
        await newComment.save();
        // Add the comment to the post
        const post = await Post.findById(postId);   
        post.comments.push(newComment._id);
        await post.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//  Get All Comments from post  /api/comments/posts/:id
module.exports.FindCommentsByPost = async (req, res) => {
    try {
        const postId = req.params.postId; // Assuming the param name is postId
        const postComments = await Comment.find({ post: postId })
        res.json(postComments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all comments made by a specific user /api/comments/user/:userId
exports.FindCommentsByUser = async (req, res) => {
    try {
        const authorId = req.params.userId; // Assuming the param name is userId
        const userComments = await Comment.find({ author: authorId }).populate('author post');
        res.json(userComments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a specific comment  /api/comments/:id
exports.UpdateComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
        const updatedComment = await Comment.findByIdAndUpdate(commentId, updatedData, options)
        if (!updatedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a specific comment /api/comments/:id
exports.DeleteComment = async (req, res) => {
    try {
        const commentId = req.params.id;
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        // Delete from posts comments and users comments
        await Post.updateMany({ comments: commentId }, { $pull: { comments: commentId } });
        if (!deletedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(204).send(); // No Content
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const { Post, User  } = require('../models');

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
        const post = await Post.findById(req.params.postId);
        res.json(post);
        console.log(post)

    }catch (error) {
        res.json({ message: error });
    }
}

//  Create Post /api/posts
module.exports.CreatePost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { posts: post._id } });
        
        console.log(post, user);
        console.log("userId", req.body.userId);
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

//  Like a post /api/posts/like
module.exports.LikePost = async (req, res, next) => {

   // postId and userId from the request body
    const { postId, userId } = req.body;
   
        try {
          // Use $addToSet to avoid adding the same userId more than once
          const user = await User.findByIdAndUpdate(userId, { $addToSet: { favorites: postId } });

          const updateLikes = await Post.findByIdAndUpdate(
            postId,
            { $addToSet: { likes: userId } }
          ).populate('likes'); // Optionally populate the likes array to return user details

        
          if (!updateLikes) {
            return res.status(404).send('Post not found');
          }
      
            res.send({ message: 'Added to favorites' });
          
        } catch (error) {
          res.status(500).send(error.toString());
        }
      }

    //    Unlike a post /api/posts/unlike
module.exports.UnlikePost = async (req, res, next) => {
    const { postId, userId } = req.body;
    try {
      const user = await User.findByIdAndUpdate
        (userId, { $pull: { favorites: postId } });
        const updateLikes = await Post.findByIdAndUpdate
        (postId, { $pull: { likes: userId } });
        if (!updateLikes) {
            return res.status(404).send('Post not found');
            }
        res.send( {message: 'Removed from favorites'});
    }
    catch (error) {
        res.status
        (500).send(error.toString());
    }
};

// Check if post isLiked by user 
module.exports.isLiked = async (req, res, next) => {
    const { userId } = req.body;
    const postId = req.params.postId;
    try {
      const post = await Post.findById(postId);
      const isLiked = post.likes.includes(userId);

      res.json({post, isLiked });
    } catch (error) {
      res.status(500).send({ message: 'Error checking like status', error });
    }
  };

//   get and add views to a post    
module.exports.addView = async (req, res, next) => {
    const postId = req.params.postId;
    const userId = req.body.userId;
    try {
        // Find the post by ID 
        const post = await Post.findById(postId);
        // Check if the user hasn't already viewed the post
        if (!post.views.includes(userId)) {
            // Add the user's ID to the views array
            post.views.push(userId);
            // Save the updated post 
            await post.save();
        }
        // Respond with the updated post
        res.json(post);
    } catch (error) {
        // If an error occurs, respond with status 500 and the error message
        res.status(500).send(error.toString());
    }
};        

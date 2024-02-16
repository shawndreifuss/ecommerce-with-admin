const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    body: { 
        type: String, 
        required: true 
    },
    thumbnail: { 
        type: String, 
        
    },
    tags: { 
        type: Array, 
        
    },
    images: [{
        type: Array,
    }],
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    comments: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Comment' 
    }],
    likes: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }], // Array of user IDs who liked the post
    dislikes: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }], // Array of user IDs who disliked the post
  });
  
  module.exports = mongoose.model('Post', postSchema);
  
const mongoose = require('mongoose');
const { Schema } = mongoose;


const postSchema = new mongoose.Schema({
    author:{
        type: String,
        required: true
    },
    title: { 
        type: String, 
        required: true 
    },
    category: {
        type: String,
        
    },
    description: { 
        type: String, 
        required: true 
    },
    tags: {
        type: Array,
        
    },
    body: { 
        type: String, 
        required: true,

    },
    img: { 
        type: String
        
    },
    tags: { 
        type: Array,
    },
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
    views: 
    [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    
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
  
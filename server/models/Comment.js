const mongoose = require("mongoose");
const { Schema } = mongoose;


const commentSchema = new mongoose.Schema({
  text: { 
    type: String, required: true 
},
  author: { 
    type: Schema.Types.ObjectId, 
    ref: "User", required: true 
},
  post: { 
    type: Schema.Types.ObjectId, 
    ref: "Post", required: true 
},
  likes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
}],
  createdAt: { 
    type: Date, default: Date.now 
},
});

module.exports = mongoose.model("Comment", commentSchema);

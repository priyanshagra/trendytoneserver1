const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    comment:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('comment',CommentSchema);
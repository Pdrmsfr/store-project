const { default: mongoose, Schema, Types } = require("mongoose");

const schema = new mongoose.schema({
    outhor: {type: Types.ObjectId,required: true},
    title: {type: String,required: true},
    text: {type: String,required: true},
    image: {type: String,required: true},
    tags: {type: [String],default: []},
    category: {type: Types.ObjectId,required: true},
    comments: {type: [],default: []},
    like: {type: [Types.ObjectId],default: []},
    dislike: {type: [Types.ObjectId],default: []},
    bookmark : {type: [Types.ObjectId],default: []},
});

module.exports = {
    BlogModel: mongoose.model("blog",Schema)
}
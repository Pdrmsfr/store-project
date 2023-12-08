const { default: mongoose, Schema, Types } = require("mongoose");

const schema = new mongoose.schema({
    title: {type: String,required: true},
    description: {type: String,required: true},
    short_desc: {type: String,required: true},
    images: {type: [String],required: true},
    tags: {type: [String],default: []},
    category: {type: Types.ObjectId,required: true},
    comments: {type: [],default: []},
    like: {type: [Types.ObjectId],required: true},
    dislike: {type: [Types.ObjectId],default: []},
    bookmark: {type: [Types.ObjectId],default: []},
    count: {type: Number},
    price: {type: Number,default: 0},
    discount: {type: Number,default: 0},
    type: {type: String,required: true},
    time: {type: String},
    format: {type: String},
    teacher: {type: Types.ObjectId},
    feture: {type: Object,default: {
        length: "",
        height: "",
        width: "",
        weight: "",
        colors : [],
        model: [],
        madein: ""
    }}
});

module.exports = {
    ProductModel: mongoose.model("product",Schema)
}
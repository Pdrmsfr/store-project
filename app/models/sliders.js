const { default: mongoose, Schema } = require("mongoose");

const schema = new mongoose.schema({
    title: {type: String},
    text: {type: String},
    image: {type: String,required: true},
    image: {type: String,default:"main"},
});

module.exports = {
    SliderModel: mongoose.model("slider",Schema)
}
const { default: mongoose, Schema } = require("mongoose");

const schema = new mongoose.schema({
    title: {type: String,required: true},
});

module.exports = {
    CategoryModel: mongoose.model("category",Schema)
}
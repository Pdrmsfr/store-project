const { default: mongoose, Schema } = require("mongoose");

const schema = new mongoose.schema({
    firstName: {type: Strin},
    lastName: {type: String},
    email: {type: String,lowercase: true},
    phone: {type: String},
    username: {type: String,lowercase: true},
    password: {type: String},
    otp: {type: Object,default: {
        code: 0,
        expire: 0
    }},
    bills: {type: [],default: []},
    discount: {type: Number,default: 0},
    birthday: {type:String},
    role: {type:[String],default: ["USER"]}
});

module.exports = {
    UserModel: mongoose.model("user",Schema)
}
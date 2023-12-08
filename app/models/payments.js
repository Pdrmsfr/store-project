const { default: mongoose, Schema } = require("mongoose");

const schema = new mongoose.schema({

});

module.exports = {
    PaymentModel: mongoose.model("payment",Schema)
}
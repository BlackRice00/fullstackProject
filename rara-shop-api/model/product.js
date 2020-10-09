var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// if not in this schema, then the data won't be saved
var product = new Schema({
    title: String,
    price: Number,
    likes: {type: Number, default: 0}
});

module.exports = mongoose.model("Product", product);
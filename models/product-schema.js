const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: String,
    brand: String,
    price: Number,
    special_price: Number,
    stock: Number,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
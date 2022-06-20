const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String
    }
})

const Products = mongoose.model("Product", productSchema)

module.exports = Products
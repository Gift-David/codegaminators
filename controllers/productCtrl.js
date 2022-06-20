const Product = require("../model/productModel")

const productCtrl = {
    getAllProducts: (req, res)=>{
        res.json({msg: "to get all products"})
    },

    postProduct: async(req, res)=>{
        const {name, price} = req.body

        const newProduct = new Product({name, price})

        await newProduct.save()

        res.json({msg: "Product saved successfully"})
    }
}


module.exports = productCtrl
const express = require("express")
const productCtrl = require("../controllers/productCtrl")

const router = express.Router()

router.get("/allproducts", productCtrl.getAllProducts)
router.post("/product", productCtrl.postProduct)

module.exports = router
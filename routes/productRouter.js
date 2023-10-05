const router = require("express").Router();

const Product = require("../controller/productController");

router.get("/", Product.getAllProducts);
router.get("/:id", Product.getProductById);
router.post("/", Product.createProduct);
router.patch("/:id", Product.updateProduct);
router.delete("/:id", Product.deleteProduct);

module.exports = router;

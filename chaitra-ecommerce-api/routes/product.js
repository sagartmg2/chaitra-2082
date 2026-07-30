const express = require("express");
const {
  getProducts,
  storeProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/product");
const checkAuthentication = require("../middlewares/checkAuthentication");
const Product = require("../models/Product");
const checkAdmin = require("../middlewares/checkAdmin");
const router = express.Router();

router.get("/api/products", getProducts);
router.post("/api/products", checkAuthentication, storeProduct);
// route level middleware
router.put("/api/products/:id", checkAuthentication, updateProduct);
router.delete("/api/products/:id", checkAuthentication, deleteProduct);

router.patch(
  "/api/products/verify/:id",
  checkAuthentication,
  checkAdmin,
  () => {
    Product.update(
      {
        isVerified: true,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    );
  },
);

module.exports = router;

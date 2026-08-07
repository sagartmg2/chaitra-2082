const express = require("express");
const multer  = require('multer')
const path = require("path")

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

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     // console.log(file);
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })



router.get("/api/products", getProducts);
router.post("/api/products", checkAuthentication, upload.array('photos', 12), storeProduct);
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

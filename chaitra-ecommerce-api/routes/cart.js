const express = require("express");
const {
  getCarts,
  storeCart,
  deleteCart,
  updateCart,
} = require("../controllers/cart");
const checkAuthentication = require("../middlewares/checkAuthentication");
const router = express.Router();

router.get("/api/carts", checkAuthentication, getCarts);
router.post("/api/carts", checkAuthentication, storeCart);
router.put("/api/carts/:id", checkAuthentication, updateCart);
router.delete("/api/carts/:id", checkAuthentication, deleteCart);

module.exports = router;

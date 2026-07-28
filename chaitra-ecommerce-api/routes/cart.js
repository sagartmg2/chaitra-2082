const express = require("express");
const {
  getCarts,
  storeCart,
  deleteCart,
  updateCart,
} = require("../controllers/cart");
const checkAuthentication = require("../middlewares/checkAdmin");
const router = express.Router();

router.get("/", checkAuthentication, getCarts);
router.post("/", checkAuthentication, storeCart);
router.put("/:id", checkAuthentication, updateCart);
router.delete("/:id", checkAuthentication, deleteCart);

module.exports = router;

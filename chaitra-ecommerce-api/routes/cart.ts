const express = require("express");
const {
  getCarts,
  storeCart,
  deleteCart,
  updateCart,
} = require("../controllers/cart");

import checkAuthentication from "../middlewares/checkAuthentication"

const router = express.Router();

router.get("/", checkAuthentication, getCarts);
router.post("/", checkAuthentication, storeCart);
router.put("/:id", checkAuthentication, updateCart);
router.delete("/:id", checkAuthentication, deleteCart);

// module.exports = router;
export default router

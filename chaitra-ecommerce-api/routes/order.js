const express = require("express");
const {
  getOrders,
  storeOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/order");

const checkAuthentication = require("../middlewares/checkAuthentication");
const OrderRouter = express.Router();

OrderRouter.get("/", checkAuthentication, getOrders);
OrderRouter.post("/", checkAuthentication, storeOrder);
OrderRouter.put("/:id", checkAuthentication, updateOrder);
OrderRouter.delete("/:id", checkAuthentication, deleteOrder);

module.exports = OrderRouter;

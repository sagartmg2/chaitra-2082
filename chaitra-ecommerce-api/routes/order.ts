import express from "express"

const {
  getOrders,
  storeOrder,
  deleteOrder,
  updateOrder,
  verifyOrder
} = require("../controllers/order");

import checkAuthentication from "../middlewares/checkAuthentication"

const OrderRouter = express.Router();

OrderRouter.get("/", checkAuthentication, getOrders);
OrderRouter.post("/", checkAuthentication, storeOrder);
OrderRouter.get("/verification", verifyOrder);
OrderRouter.put("/:id", checkAuthentication, updateOrder);
OrderRouter.delete("/:id", checkAuthentication, deleteOrder);

// module.exports = OrderRouter;
export default OrderRouter

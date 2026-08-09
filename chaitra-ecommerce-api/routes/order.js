const express = require("express");
const {
  getOrders,
  storeOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/order");

import checkAuthentication from "../middlewares/checkAuthentication"

const Order = require("../models/Order");
const { default: axios } = require("axios");
const OrderRouter = express.Router();

OrderRouter.get("/", checkAuthentication, getOrders);
OrderRouter.post("/", checkAuthentication, storeOrder);

OrderRouter.get("/verification", async (req, res) => {
  const base64 = req.query.token;

  // Decode Base64
  const decodedString = Buffer.from(base64, "base64").toString("utf8");

  // Parse JSON
  const data = JSON.parse(decodedString);


  let response = await axios.get(
    `https://rc.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=${data.total_amount}&transaction_uuid=${data.transaction_uuid}`,
  );

  if (response.data.status == "COMPLETE") {
    await Order.update(
      {
        paymentStatus: "paid",
      },
      {
        where: {
          orderNo: data.transaction_uuid,
        },
      },
    );
  }

  res.send("success");
});

OrderRouter.put("/:id", checkAuthentication, updateOrder);
OrderRouter.delete("/:id", checkAuthentication, deleteOrder);

module.exports = OrderRouter;

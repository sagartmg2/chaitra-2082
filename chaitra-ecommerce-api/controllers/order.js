const Order = require("../models/Order");

const getOrders = async (req, res) => {
  let orders = await Order.findAll({
    where: {
      parentOrderId: null,
    },
    include: {
      model: Order,
      as: "subOrders",
      attributes: ["id", "name"],
    },
  }); // select * from orders
  res.send({
    data: orders,
  });
};

const storeOrder = async (req, res) => {
  try {
    let date = new Date();
    const realMonth = date.getMonth() + 1;
    let orderNo =
      "DRZ-" +
      realMonth +
      "-" +
      Date.now() +
      Math.floor(Math.random() * 1000000);
    let order = await Order.create({
      orderNo,
      paymentMode: "cod",
      userId: req.user.id,
      address:req.body.address,
      phone:req.body.phone,
    });

    // SubOrder.create()
    // OrderItem.create()

    res.send(order);
  } catch (err) {
    res.status(500).send({
      msg: "SERVER error",
      error: err.error,
      msg: err.message,
    });
  }
};

const updateOrder = async (req, res) => {
  res.send("orders updated");
  return;
  // zoi validation
  console.log(req.params.id);

  const cart = await Order.update(
    {
      title: req.body.title,
      price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  );

  res.send("cart update");
};

const deleteOrder = async (req, res) => {
  res.send("orders deleted");
  return;
  const cart = await Order.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.send("cart deleted");
};

// named export
module.exports = {
  getOrders,
  storeOrder,
  updateOrder,
  deleteOrder,
};

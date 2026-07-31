const { Op } = require("sequelize");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const SubOrder = require("../models/SubOrder");
const OrderItem = require("../models/OrderItem");
const Cart = require("../models/Cart");

const getOrders = async (req, res) => {
  let orders = await Order.findAll({
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
      address: req.body.address,
      phone: req.body.phone,
    });

    // order
    console.log(order.id);

    let products = req.body.products;
    // console.log(products);

    let cartPoducts = await Cart.findAll({
      where: {
        userId: req.user.id,
      },
      attributes: ["productId", "quantity"],
    });

    // cartPoducts.find(el => el.productId == 5).quantity
    // res.send(cartPoducts);
    // return;

    let cartProductIds = cartPoducts.map((el) => el.productId);
    console.log(cartProductIds);

    let sellers = await User.findAll({
      include: {
        model: Product,
        as: "products",
        where: {
          id: {
            [Op.in]: cartProductIds,
          },
        },
      },
    });

    // for (i = 0 ; i<sellers.length)
    // for in
    // for of
    sellers.forEach(async (seller) => {
      console.log(11111);
      let subOrder = await SubOrder.create({
        orderId: order.id,
        sellerId: seller.id,
        shippingCharge: seller.shippingCharge,
      });

      //  for (j = 0,j<seller.product.lenth ;)
      // for in
      // for of
      seller.products.forEach(async (product) => {
        await OrderItem.create({
          subOrderId: subOrder.id,
          productId: product.id,
          quantity: cartPoducts.find((el) => el.productId == product.id)
            .quantity,
          price: product.price,
          productName: product.title,
        });
      });
    });

    // SubOrder.create()
    // OrderItem.create()

    console.log(2222222222);
    res.send("order c");
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

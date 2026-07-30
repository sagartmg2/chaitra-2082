const z = require("zod");
const Product = require("../models/Product");
const Category = require("../models/Category");

const getProducts = async (req, res) => {
  let products = await Product.findAll({
    include:{
      model:Category,
      as: "category"
    }
  }); // select * from products
  res.send(products);
};

const storeProduct = async (req, res) => {
  try {
    if (req.user.isSeller) {
      let { title, price, stock, categoryId } = req.body;
      let product = await Product.create({
        title: title,
        price,
        stock,
        userId: req.user.id,
        categoryId,
      });

      res.send(product);
    } else {
      res.status(403).send({
        msg: "forbidden",
      });
    }
  } catch (err) {
    res.status(500).send({
      msg: err.message,
      error: err,
    });
  }
};

const updateProduct = async (req, res) => {
  res.send("products updated");
  return;
  // zoi validation
  console.log(req.params.id);

  const product = await Product.update(
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

  res.send("product update");
};

const deleteProduct = async (req, res) => {
  console.log("porocuts deleting....");
  res.send("products deleted");
  return;
  const product = await Product.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.send("product deleted");
};

// named export
module.exports = {
  getProducts,
  storeProduct,
  updateProduct,
  deleteProduct,
};

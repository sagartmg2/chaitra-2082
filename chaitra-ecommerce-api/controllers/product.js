const z = require("zod");
const cloudinary = require("cloudinary").v2;

const Product = require("../models/Product");
const Category = require("../models/Category");
const { Op, Sequelize } = require("sequelize");
const ProductImage = require("../models/ProductImage");

cloudinary.config({
  cloud_name: "dtv8dtpkm",
  api_key: "214576936119774",
  api_secret: "Bybox_PKl5TAvKLSrDbGHLXEI3E",
});

const getProducts = async (req, res) => {
  let limit = 2;
  let page = 1;
  let searchTerm = "";
  let sortBy = ["createdAt", "DESC"];
  let categoryIds = [];

  if (req.query.categoryIds) {
    // 1,3
    categoryIds = req.query.categoryIds.split(",");
  }

  // use switch instead
  if (req.query.sortBy) {
    if (req.query.sortBy == "priceASC") {
      sortBy = ["price", "ASC"];
    } else if (req.query.sortBy == "priceDESC") {
      sortBy = ["price", "DESC"];
    } else if (req.query.sortBy == "latest") {
      sortBy = ["createdAt", "DESC"];
    } else if (req.query.sortBy == "oldest") {
      sortBy = ["createdAt", "ASC"];
    } else if (req.query.sortBy == "titleA-Z") {
      sortBy = [Sequelize.fn("LOWER", Sequelize.col("title")), "ASC"];
    } else if (req.query.sortBy == "titleZ-A") {
      sortBy = [Sequelize.fn("LOWER", Sequelize.col("title")), "DESC"];
    }
  }

  if (req.query.limit) {
    limit = req.query.limit;
  }

  if (req.query.page) {
    page = req.query.page;
  }

  if (req.query.q) {
    searchTerm = req.query.q;
  }

  let products = await Product.findAndCountAll({
    where: {
      title: {
        [Op.iLike]: `%${searchTerm}%`,
      },
    },
    include: [
      {
        model: Category,
        as: "category",
        where: {
          id: {
            [Op.in]: categoryIds,
          },
        },
      },
      {
        model: ProductImage,
        as: "images",
      },
    ],
    limit: limit,
    offset: (page - 1) * limit,
    // order: [
    //   ["createdAt", "DESC"],
    //   // ["price", "ASC"],
    //   // ["title", "ASC"],
    // ],
    order: [sortBy],
  });
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

      console.log(req.files);

      // req.files.forEach((file) => {
      //   ProductImage.create({
      //     productId: product.id,
      //     path: file.path,
      //   });
      // });

      req.files?.forEach(el => {
            let byteArrayBuffer = el.buffer
            new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream((error, uploadResult) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(uploadResult);
                }).end(byteArrayBuffer);

            }).then((uploadResult) => {
                console.log(uploadResult);
                ProductImage.create({
                    path: uploadResult.secure_url,
                    productId: product.getDataValue("id")
                })
            }).catch((error) => {
                console.error(error);
            });
        })


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

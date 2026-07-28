const Category = require("../models/Category");

const getCategories = async (req, res) => {
  let categories = await Category.findAll({
    where: {
      parentCategoryId: null,
    },
    include: {
      model: Category,
      as: "subCategories",
      attributes:['id','name']
    },
  }); // select * from categories
  res.send({
    data: categories,
  });
};

const storeCategory = async (req, res) => {
  try {
    let category = await Category.create({
      name: req.body.name,
      parentCategoryId: req.body.parentCategoryId,
    });

    res.send(category);
  } catch (err) {
    res.status(500).send({
      msg: "SERVER error",
      error: err.error,
      msg: err.message,
    });
  }
};

const updateCategory = async (req, res) => {
  res.send("categories updated");
  return;
  // zoi validation
  console.log(req.params.id);

  const cart = await Category.update(
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

const deleteCategory = async (req, res) => {
  res.send("categories deleted");
  return;
  const cart = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });

  res.send("cart deleted");
};

// named export
module.exports = {
  getCategories,
  storeCategory,
  updateCategory,
  deleteCategory,
};

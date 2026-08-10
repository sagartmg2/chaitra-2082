import express from "express"

const {
  getCategories,
  storeCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category");


// const checkAuthentication = require("../middlewares/checkAuthentication");
import checkAuthentication from "../middlewares/checkAuthentication"
import checkAdmin from "../middlewares/checkAdmin";

const router = express.Router();

router.get("/", getCategories);
router.post("/", checkAuthentication, checkAdmin, storeCategory);
router.put("/:id", checkAuthentication, checkAdmin, updateCategory);
router.delete("/:id", checkAuthentication, checkAdmin, deleteCategory);

// module.exports = router;
export default router;

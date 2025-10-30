import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updatedProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts); //fetching api end point

router.post("/", createProduct);

router.put("/:id", updatedProduct); //updation api end point

router.delete("/:id", deleteProduct); //deletion api end point

export default router;

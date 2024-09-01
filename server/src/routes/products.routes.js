import { Router } from "express";
import productController from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.get("/product", productController.get);

export { productRoutes };

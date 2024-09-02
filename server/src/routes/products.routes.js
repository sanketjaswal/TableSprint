import { Router } from "express";
import productController from "../controllers/product.controller";

const productRoutes = Router();

productRoutes.get("/product", productController.get);
productRoutes.post("/product", productController.add);
productRoutes.put("/product/:id", productController.update);
productRoutes.delete("/product/:id", productController.delete);

export { productRoutes };

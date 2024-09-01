import { Router } from "express";
import categoryController from "../controllers/category.controller";

const categoryRoutes = Router();

categoryRoutes.get("/category", categoryController.get);
categoryRoutes.post("/category", categoryController.add);
categoryRoutes.put("/category", categoryController.update);
categoryRoutes.delete("/category", categoryController.delete);

export { categoryRoutes };

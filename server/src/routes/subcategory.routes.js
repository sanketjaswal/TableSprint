import { Router } from "express";
import subCategoryController from "../controllers/subcategory.controller";

const subCategoryRoutes = Router();

subCategoryRoutes.get("/subCategory", subCategoryController.get);
subCategoryRoutes.post("/subCategory", subCategoryController.add);
subCategoryRoutes.put("/subCategory/:id", subCategoryController.update);
subCategoryRoutes.delete("/subCategory/:id", subCategoryController.delete);

export { subCategoryRoutes };

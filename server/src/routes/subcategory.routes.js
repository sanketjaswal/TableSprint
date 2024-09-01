import { Router } from "express";
import subCategoryController from "../controllers/subcategory.controller";

const subCategoryRoutes = Router();

subCategoryRoutes.get("/subCategory", subCategoryController.get);

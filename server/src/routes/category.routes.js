import { Router } from "express";
import categoryController from "../controllers/category.controller";

const categoryRoutes = Router();

categoryRoutes.get("/category", categoryController.get);

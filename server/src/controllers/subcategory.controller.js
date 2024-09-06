import * as Yup from "yup";
// import Category from "../models/Category";
import Subcategory from "../models/subcategory";

let subCategoryController = {
  get: async (req, res, next) => {
    try {
      const subCategories = await Subcategory.findAll({
        include: [{ all: true }],
      });

      return res.status(200).json(subCategories);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  add: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        // image: Yup.string().required(),
        category_id: Yup.string().required(),
        sequence: Yup.string().required(),
      });

      console.log(req.body);

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      const { name } = req.body;

      const subCategoryExists = await Subcategory.findOne({
        where: { name },
      });

      if (subCategoryExists) throw new BadRequestError();

      const subCategory = await Subcategory.create(req.body);

      return res.status(200).json(subCategory);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      console.log("params ", req.params);

      const schema = Yup.object().shape({
        name: Yup.string(),
        // image: Yup.string(),
        category_id: Yup.string(),
        sequence: Yup.string(),
        status: Yup.boolean(),
      });

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      console.log("Request Body:", req.body);

      // Find the category by id
      const subCategory = await Subcategory.findByPk(id);

      if (!subCategory) {
        return res.status(404).json({ message: "SubCategory was not found" });
      }

      const [updated] = await Subcategory.update(req.body, {
        where: { id },
      });

      console.log("Updated Rows:", updated);

      if (updated) {
        const updatedSubCategory = await Subcategory.findByPk(id);
        return res.status(200).json(updatedSubCategory);
      }

      return res.status(404).json({ message: "Sub-Category not found" });
    } catch (error) {
      console.error("Error:", error);
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const subCategory = await Subcategory.findByPk(id);
      if (!subCategory) throw new BadRequestError();

      subCategory.destroy();

      return res.status(200).json({ msg: "Deleted" });
    } catch (error) {
      next(error);
    }
  },
};

export default subCategoryController;

import Category from "../models/category";
import * as Yup from "yup";
import {
  BadRequestError,
  UnauthorizedError,
  ValidationError,
} from "../utils/ApiError";

let categoryController = {
  get: async (req, res, next) => {
    try {
      //   console.log("category model controller", Category);
      const categories = await Category.findAll();

      return res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  add: async (req, res, next) => {
    try {
      // const categories = await Category.findAll();
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        image: Yup.string().required(),
        sequence: Yup.string().required(),
      });

      console.log(req.body);

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      const { name } = req.body;

      const categoryExists = await Category.findOne({
        where: { name },
      });

      if (categoryExists) throw new BadRequestError();

      const category = await Category.create(req.body);

      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
        image: Yup.string(),
        sequence: Yup.string(),
        status: Yup.boolean(),
      });

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      const { name } = req.body;
      console.log(req.body);

      // Find the category by name
      const category = await Category.findOne({
        where: { name },
      });

      if (!category) {
        return res.status(404).json({ message: "Category was not found" });
      }

      const [updated] = await Category.update(req.body, {
        where: { name: req.body.name },
      });

      if (updated) {
        const updatedCategory = await Category.findOne({
          where: { name },
        });
        return res.status(200).json(updatedCategory);
      }

      return res.status(404).json({ message: "Category not found" });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { name } = req.params;
      const category = await User.findOne({
        where: { name },
      });
      if (!category) throw new BadRequestError();

      category.destroy();

      return res.status(200).json({ msg: "Deleted" });
    } catch (error) {
      next(error);
    }
  },
};

export default categoryController;

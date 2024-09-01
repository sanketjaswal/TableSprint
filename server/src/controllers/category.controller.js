import Category from "../models/category";

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
};

export default categoryController;

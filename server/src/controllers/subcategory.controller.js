import Subcategory from "../models/subcategory";

let subCategoryController = {
  get: async (req, res, next) => {
    try {
      const subCategories = await Subcategory.findAll();

      return res.status(200).json(subCategories);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

export default subCategoryController;

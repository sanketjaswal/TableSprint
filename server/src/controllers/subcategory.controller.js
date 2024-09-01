import SubCategory from "../models/SubCategory";

let subCategoryController = {
  get: async (req, res) => {
    try {
      const subCategory = await SubCategory.findAll();

      return res.status(200).json(subCategory);
    } catch (error) {
      console.log(error);
    }
  },
};

export default subCategoryController;

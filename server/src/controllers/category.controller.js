import Category from "../models/Category";

let categoryController = {
  get: async (req, res) => {
    try {
      const category = await Category.findAll();

      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  },
};

export default categoryController;

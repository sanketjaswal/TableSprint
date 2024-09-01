import Product from "../models/product";

let productController = {
  get: async (req, res) => {
    try {
      const products = await Product.findAll();

      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

export default productController;

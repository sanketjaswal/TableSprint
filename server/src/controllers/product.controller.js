import Product from "../models/Product";

let productController = {
  get: async (req, res) => {
    try {
      const product = await Product.findAll();

      return res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  },
};

export default productController;

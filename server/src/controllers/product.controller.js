import * as Yup from "yup";
import Product from "../models/product";

let productController = {
  get: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [{ all: true }],
      });

      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  add: async (req, res, next) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        image: Yup.string().required(),
        status: Yup.string().required(),
      });

      console.log(req.body);

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      const { name } = req.body;

      const productExists = await Product.findOne({
        where: { name },
      });

      if (productExists) throw new BadRequestError();

      const product = await Product.create(req.body);

      return res.status(200).json(product);
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
        image: Yup.string(),
        status: Yup.boolean(),
      });

      if (!(await schema.isValid(req.body))) throw new ValidationError();

      console.log("Request Body:", req.body);

      // Find the category by id
      const product = await Product.findByPk(id);

      if (!product) {
        return res.status(404).json({ message: "Product was not found" });
      }

      const [updated] = await Product.update(req.body, {
        where: { id },
      });

      console.log("Updated Rows:", updated);

      if (updated) {
        const updatedProduct = await Product.findByPk(id);
        return res.status(200).json(updatedProduct);
      }

      return res.status(404).json({ message: "Product not found" });
    } catch (error) {
      console.error("Error:", error);
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await Product.findByPk(id);
      if (!product) throw new BadRequestError();

      product.destroy();

      return res.status(200).json({ msg: "Deleted" });
    } catch (error) {
      next(error);
    }
  },
};

export default productController;

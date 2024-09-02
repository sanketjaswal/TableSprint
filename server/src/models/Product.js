import Sequelize, { Model } from "sequelize";
import Subcategory from "./subcategory";

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        status: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Product",
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Subcategory, {
      foreignKey: {
        name: "subcategory_id",
        field: "subcategory_id",
      },
    });
    // this.belongsTo(models.Category);
  }
}

export default Product;

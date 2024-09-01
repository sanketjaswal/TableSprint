import Sequelize, { Model } from "sequelize";

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
    // this.belongsTo(models.Subcategory);
    // this.belongsTo(models.Category);
  }
}

export default Product;

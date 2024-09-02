import Sequelize, { Model } from "sequelize";

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
        sequence: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: "Category",
        // timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Subcategory, {
      foreignKey: {
        name: "category_id",
        field: "category_id",
      },
    });
  }
}

export default Category;

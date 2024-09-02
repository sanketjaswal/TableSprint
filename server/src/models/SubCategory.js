import Sequelize, { Model } from "sequelize";

class Subcategory extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        status: Sequelize.STRING,
        sequence: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: "Subcategory",
        timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: {
        name: "category_id",
        field: "category_id",
      },
    });

    this.hasMany(models.Product, {
      foreignKey: {
        name: "subcategory_id",
        field: "subcategory_id",
      },
    });
  }
}

export default Subcategory;

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
        timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category);
    this.hasMany(models.Product);
  }
}

export default Subcategory;

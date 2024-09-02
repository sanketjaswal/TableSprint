"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("Products", "subcategory_id", {
        type: Sequelize.INTEGER,
        references: {
          model: "SubCategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
        defaultValue: null,
        after: "status",
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("Products", "subcategory_id"),
    ]);
  },
};

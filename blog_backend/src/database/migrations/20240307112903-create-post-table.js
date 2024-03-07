'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      post_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      post_slug: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post_titel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post_subtitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      post_picture: {
        allowNull: true,
        type: Sequelize.STRING
      },
      post_text: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      author_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'author',
          key: 'author_id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'category',
          key: 'category_id'
        }
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.NOW,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('post');
  }
};
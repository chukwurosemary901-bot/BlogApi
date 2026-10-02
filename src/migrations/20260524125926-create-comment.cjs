'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: DataTypes.UUIDV4
      },
      comment: {
        type: Sequelize.TEXT
      },

      userID:{
        type: Sequelize.STRING,
        references: {
          model: 'Users', key: 'id'
        }  
      },
      
      blogID:{
         type: Sequelize.STRING,
        references: {
          model: 'Blogs', key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};
'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Blogs', {
      id: {
        primaryKey: true,
        type: Sequelize.STRING,
        defaultValue: DataTypes.UUIDV4
      },

       bloggerID:{
        type: Sequelize.STRING,
        allowNull: false,
        references: {model: 'Users', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        },

      title: {
        type: Sequelize.STRING,
        allowNull: false
      },

      blog:{
        type: Sequelize.TEXT,
        allowNull: false
            },
       
        status:{
          type: Sequelize.ENUM('draft', 'posted'),
          defaultValue: 'draft'
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
    await queryInterface.dropTable('Blogs');
  }
};
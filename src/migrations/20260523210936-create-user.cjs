'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
 id: {
            primaryKey: true,
            type: Sequelize.STRING,
            defaultValue:DataTypes.UUIDV4
          },
    
          firstName: {
            type: Sequelize.STRING,
            allowNull: false,
    
          },
    
          lastName: {
            type: Sequelize.STRING ,
            allowNull: false
          },
    
          D_O_B:{
            type: Sequelize.DATE,
            allowNull: false
          },
    
          gender:{
            type: Sequelize.ENUM('male', 'female'),
            allowNull: false
          },
    
          country_code:{
            type: Sequelize.STRING,
            allowNull: false
          },
    
          phone_number:{
            type: Sequelize.STRING,
            allowNull: false
          },
    
          email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
    
          profilePicture:{
            type: Sequelize.STRING,
            defaultValue: 'null',
      
          },
    
          is_Blogger:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,

    
          },
          blogName:{
            type: Sequelize.STRING,
            unique: true,
            defaultValue: 'null'
          },
    
          password:{
            type: Sequelize.STRING,
            allowNull: false
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
    await queryInterface.dropTable('Users');
  }
};
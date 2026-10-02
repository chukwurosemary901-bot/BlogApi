import {DataTypes,  Model, Sequelize } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

export class User extends Model {}

User.init(
  {

      id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue:DataTypes.UUIDV4
          },
    
      firstName: {
            type: DataTypes.STRING,
            allowNull: false,
    
          },
    
      lastName: {
            type: DataTypes.STRING ,
            allowNull: false
          },
    
      D_O_B:{
            type: DataTypes.DATE,
            allowNull: false
          },
    
      gender:{
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false
          },
    
      country_code:{
            type: DataTypes.STRING,
            allowNull: false
          },
    
      phone_number:{
            type: DataTypes.STRING,
            allowNull: false
          },
    
      email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
    
      profilePicture:{
            type: DataTypes.STRING,
            defaultValue: 'null',
      
          },
    
      is_Blogger:{
            type: DataTypes.BOOLEAN,
            defaultValue: false,
    
          },
      blogName:{
            type: DataTypes.STRING,
            unique: true,
            defaultValue: null,
            
          },
    
      password:{
            type: DataTypes.STRING,
            allowNull: false
          },
          
      createdAt: {
            allowNull: false,
            type: DataTypes.DATE
          },
    
      updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
          }, 
      role:{
          type: DataTypes.ENUM('User', 'Moderator', 'Administrator'),
          defaultValue: 'User'

          },
      is_Verified:{
            type : DataTypes.BOOLEAN,
            defaultValue: false

          },
      No_Of_Posts:{
          type: DataTypes.INTEGER,
          defaultValue: 0

        },

      followersCount:{
          type: DataTypes.BIGINT,
          defaultValue: 0
      },   

      followingCount:{
          type: DataTypes.BIGINT,
          defaultValue: 0
      },    

     likesCount:{
          type: DataTypes.BIGINT,
          defaultValue: 0
      },   

      shareCount:{
          type: DataTypes.BIGINT,
          defaultValue: 0
      },    
    

  },


  {

    sequelize,
    modelName: "User",
    tableName: "Users"

  }
)
























// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Blogger extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Blogger.init({
//     firstName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Blogger',
//   });
//   return Blogger;
// };
import { DataTypes, Model } from "sequelize"
import { sequelize } from "../config/sequelize.js"


export class Blog extends Model {}

Blog.init(

{
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4
      },

       bloggerID:{
        type: DataTypes.STRING,
        allowNull: false,
        references: {model: 'User', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
        },

      title: {
        type: DataTypes.STRING,
        allowNull: false
      },

      blog:{
        type: DataTypes.TEXT,
        allowNull: false
            },
       
        status:{
          type: DataTypes.ENUM('draft', 'posted'),
          defaultValue: 'draft'
        },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },

    {
      sequelize,
      modelName: 'Blog',
      tableName: 'Blogs' 
    }
  )


























// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Blog extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Blog.init({
//     title: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Blog',
//   });
//   return Blog;
// };
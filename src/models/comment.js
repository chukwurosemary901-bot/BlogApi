import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js";

export class Comment extends Model {}

Comment.init(

  {

      id: {
            primaryKey: true,
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4
      },
      comment: {
        type: DataTypes.TEXT
      },

      userID:{
        type: DataTypes.STRING,
        references: {
          model: 'Users', key: 'id'
        }  
      },
      
      blogID:{
         type: DataTypes.STRING,
        references: {
          model: 'Blogs', key: 'id'
        }
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
    modelName: "Comment",
    tableName: "Comments"
  }
)




















// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Comment extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Comment.init({
//     comment: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Comment',
//   });
//   return Comment;
// };

import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.js";

export class Follow extends Model {}

Follow.init( {
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4
      },
 followersID: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Users', key: 'id'
        }, 
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
    followingID: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Users', key: 'id'
        }, 
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
      modelName: "Follow",
      tableName: "Follows"
      }
)



























// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Follows extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Follows.init({
//     followingID: DataTypes.STRING,
//     followersID: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Follows',
//   });
//   return Follows;
// };

import { Sequelize } from "sequelize";

import { configuration } from "./env.js";

export const sequelize = new Sequelize(configuration.DB.name, configuration.DB.user, configuration.DB.password, {
  
  host: 'localhost',

  dialect:   'postgres' 
  
});

// const isProduction = configuration.APP.nodeEnv === 'production';

// export const sequelize = new Sequelize(configuration.APP.dataBaseURL, {
//     logging: false,
//     dialect: 'postgres',
//     dialectOptions : {
//         ssl: isProduction ? {
//             require: true,
//             rejectUnauthorized: false
//         }: false
//     }
// })
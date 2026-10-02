
import { Sequelize } from "sequelize";

import { configuration } from "./env.js";

export const sequelize = new Sequelize(configuration.DB.name, configuration.DB.user, configuration.DB.password, {
  
  host: 'localhost',

  dialect:   'postgres' 
  
});
import { configuration } from "./env"

export default {
  development: 
  {
    username: configuration.DB.user,
    password: configuration.DB.password,
    database: configuration.DB.name,
    host: configuration.DB.host,
    dialect: "postgres"
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
//   production: {
//       use_env_variable: "DATABASE_URL",
//       dialect: "postgres",
//       dialectOptions: {
//   ssl: {
//     require: true,
//     rejectUnauthorized: false
//   }
// }
//   }
}

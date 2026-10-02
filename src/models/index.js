

import { Blog } from "./blog.js";
import { Comment } from "./comment.js";
import { User } from "./user.js";
import { Follow } from './follows.js'
User.hasMany(Blog, {
    foreignKey: 'bloggerID',
    as: 'blogsPosted'
})

Blog.belongsTo( User, {
    foreignKey: 'bloggerID',
    as: 'content_Creator'
})

User.hasMany( Comment, {
    foreignKey: 'userID',
    as: 'user_comment'
})

Comment.belongsTo( User, {
    foreignKey: 'userID',
    as: 'commenters'

})

Blog.hasMany( Comment, {
foreignKey: 'blogID',
as: 'blog-comments'

})

Comment.belongsTo( Blog, {
        foreignKey: 'blogID',
        as: 'blogersPost'
})

User.hasMany( Follow, {
        foreignKey: 'followersID',
        as: 'following'
})

Follow.belongsTo( User, {
        foreignKey: 'followingID',
        as: 'followedUser'
})
export {Blog, User, Comment, Follow }




















































// 'use strict';

// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const process = require('process');
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/database.js')[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (
//       file.indexOf('.') !== 0 &&
//       file !== basename &&
//       file.slice(-3) === '.js' &&
//       file.indexOf('.test.js') === -1
//     );
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;

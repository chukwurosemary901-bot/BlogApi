'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Users', 'followersCount', {
    type: Sequelize.BIGINT,
    defaultValue: 0
   }),

   await queryInterface.addColumn('Users', 'followingCount', {
    type: Sequelize.BIGINT,
    defaultValue: 0
   }),

   await queryInterface.addColumn('Users', 'likesCount', {
    type: Sequelize.BIGINT,
    defaultValue: 0
   }),
   await queryInterface.addColumn('Users', 'shareCount', {
    type: Sequelize.BIGINT,
    defaultValue: 0
   })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'followersCount'),
    await queryInterface.removeColumn('Users', 'followingCount'),
    await queryInterface.removeColumn('Users', 'likesCount')
    await queryInterface.removeColumn('Users', 'shareCount')
  }
};

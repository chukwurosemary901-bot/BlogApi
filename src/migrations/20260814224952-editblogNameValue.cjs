'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkUpdate(
      'Users', 
      { blogName: null },
      { blogName: 'null' }
    )

    await queryInterface.changeColumn( 'Users', 'blogName', {

      type: Sequelize.STRING,
      

    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.changeColumn(  'Users', 'blogName', {

    type: Sequelize.STRING,
    unique: true,
    defaultValue: 'null'
   })
  }
};

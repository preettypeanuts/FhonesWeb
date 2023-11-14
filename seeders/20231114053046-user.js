'use strict';
const bcrypt = require('bcryptjs')
const { hashPass } = require('../helpers/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = require('../json/user.json').map(user => {
      user.password = hashPass(user.password)
      user.createdAt = new Date()
      user.updatedAt = new Date()
      return user
    })
    await queryInterface.bulkInsert('Users', users)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true
    });
  }
};

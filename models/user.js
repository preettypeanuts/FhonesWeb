'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Like, { foreignKey: "userId" })
      User.hasMany(models.Comment, { foreignKey: "userId" })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "User name is required"
        },
        notEmpty: {
          args: true,
          msg: "User name is required"
        }
      },
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Email is required"
        },
        isEmail: true,
        notEmpty: {
          args: true,
          msg: "Email is required"
        }
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Password cannot empty"
        },
        min: 5,
        notEmpty: {
          args: true,
          msg: "Password cannot empty"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "Client"
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(user => {
    user.password = hashPass(user.password)
  })
  return User;
};
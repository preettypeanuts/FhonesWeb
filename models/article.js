'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Article, { foreignKey: 'authorId' })
      User.hasMany(models.Comment, { foreignKey: 'userId' })
    }
  }
  Article.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require("../../config/database");

module.exports = sequelize.define('task', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER 
  },
  title: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  },
  priority: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
}, {
    paranoid: true, 
    freezeTableName: true, 
    modelName: 'task',
});

'use strict';
const {
  Model
} = require('sequelize');
const sequelize = require("../../config/database")

module.exports = sequelize.define('Tasks', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  priority: {
    type: Sequelize.INTEGER
  },
  description: {
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE
  }
});

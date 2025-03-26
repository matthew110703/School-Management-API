const { DataTypes } = require("sequelize");
const { db } = require("../lib/db");

const School = db.define(
  "School",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      minLength: 5,
      maxLength: 255,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      maxLength: 255,
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = School;

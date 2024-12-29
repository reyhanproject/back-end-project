const { DataTypes } = require("sequelize");
const sequelize = require("../config");
const { title } = require("process");

// Definisi model Book
const Contacs = sequelize.define(
  "contacs",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    pesan: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Contacs;

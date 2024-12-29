const {Sequelize} = require('sequelize');

// Konfigurasi database
const sequelize = new Sequelize('crud', 'root', '', {
    host: 'localhost' ,
    dialect: 'mysql',
});

module.exports = sequelize;
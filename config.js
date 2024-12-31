const { Sequelize } = require('sequelize');

// Konfigurasi database
const sequelize = new Sequelize('dbReyhan_topicroar', 'dbReyhan_topicroar', 'reyhanganteng', {
    host: 'z1xlk.h.filess.io',  
    dialect: 'mysql',
    port: 3307,  
    dialectModule: require('mysql2'),
    pool: {
        max: 5, // Maksimal koneksi aktif
        min: 0, // Minimal koneksi aktif
        acquire: 30000, // Waktu maksimal (dalam ms) untuk memperoleh koneksi sebelum timeout
        idle: 10000, // Waktu koneksi idle sebelum dilepaskan (dalam ms)
    },
});

module.exports = sequelize;

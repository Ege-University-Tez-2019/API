'user strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize('u8797314_zil', 'u8797314_okan', 'BDkh72J0LNyb27E', {
  host: '94.73.146.4',
  dialect: 'mssql',
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
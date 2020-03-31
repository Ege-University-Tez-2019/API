'user strict';
const Sequelize = require('sequelize');
var sequelize = require('../db.js');


const Model = Sequelize.Model;


class Deneme extends Model {}
Deneme.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: 'user'
});


module.exports = Deneme;
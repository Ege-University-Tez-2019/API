'user strict';
const Sequelize = require('sequelize');
var sequelize = require('../db.js');


const Model = Sequelize.Model;


class StartUser extends Model {}
StartUser.init({
    ID : {
        type : Sequelize.INTEGER,
        primaryKey : true
    },
    Name : {
        type : Sequelize.STRING
    },
    Surname : {
        type : Sequelize.STRING
    },
    Email : {
        type : Sequelize.STRING
    },
    Telephone : {
        type : Sequelize.STRING,
        allowNull : false
    },
    Password : {
        type : Sequelize.STRING
    }

}, {
    sequelize,
    modelName: 'StartUser'
});

module.exports = StartUser;
'user strict';
const Sequelize = require('sequelize');
var sequelize = require('../db.js');


const Model = Sequelize.Model;


class ProfileInfo extends Model {}
ProfileInfo.init({
    ID : {
        type : Sequelize.INTEGER,
        primaryKey : true
    },
    Expertise : {
        type : Sequelize.STRING,
    },
    Interest : {
        type : Sequelize.STRING,
    },
    SchoolInfo : {
        type : Sequelize.STRING,
    },
    BusinessInfo : {
        type : Sequelize.STRING,
    },
    Balance : {
        type : Sequelize.REAL,
        allowNull : false
    },
    IsBanned : {
        type : Sequelize.BOOLEAN,
        allowNull : false
    }

}, {
    sequelize,
    modelName: 'ProfileInfo'
});


module.exports = ProfileInfo;
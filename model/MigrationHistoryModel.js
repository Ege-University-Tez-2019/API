'user strict';
const Sequelize = require('sequelize');
var sequelize = require('../db.js');


const Model = Sequelize.Model;


class MigrationHistory extends Model {}
MigrationHistory.init({
    MigrationID : {
        type : Sequelize.STRING(150),
        primaryKey : true
    },
    ContextKey : {
        type : Sequelize.STRING(300),
        primaryKey : true
    },
    Model : {
        type : Sequelize.STRING.BINARY,
        allowNull : false
    },
    ProductVersion : {
        type : Sequelize.STRING(30),
        allowNull : false
    }
}, {
    sequelize,
    modelName: 'MigrationHistory'
});


module.exports = MigrationHistory;
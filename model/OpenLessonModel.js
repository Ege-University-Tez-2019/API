'user strict';
const Sequelize = require('sequelize');
var sequelize = require('../db.js');


const Model = Sequelize.Model;


class OpenLesson extends Model {}
OpenLesson.init({
    ID : {
        type : Sequelize.INTEGER,
        primaryKey : true
    },
    NumberofRecords : {
        type : Sequelize.INTEGER,
        allowNull : false
    },
    LessonInfo : {
        type : Sequelize.STRING,
    },
    LessonCreateUser : {
        type : Sequelize.STRING,
    }
}, {
    sequelize,
    modelName: 'OpenLesson'
});


module.exports = OpenLesson;
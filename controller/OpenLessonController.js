'use strict';

var OpenLesson = require('../model/OpenLessonModel');

exports.List_Lessons = function (req, res) {
    OpenLesson.findAll({}).then(Lessons => {
        res.json({
            Lessons: Lessons
        });
    })
};

exports.Add_Lesson = function (req, res) {
    OpenLesson.create({
        ID: req.body.ID,
        NumberofRecords: req.body.NumberofRecords,
        LessonInfo: req.body.LessonInfo,
        LessonCreateUser: req.body.LessonCreateUser
    }).then(created_lesson => {
        res.json({
            created_lesson: created_lesson
        });
    })
};

exports.Update_Lesson = function (req, res) {
    OpenLesson.findAll({
        where: {
            ID: req.body.ID
        }
    }).then(updated_lesson => {
        updated_lesson[0].update({
            NumberofRecords: req.body.NumberofRecords,
            LessonInfo: req.body.LessonInfo,
            LessonCreateUser: req.body.LessonCreateUser
        }, {
            returning: true
        }).then(returning_lesson => {
            res.json({
                returning_lesson
            });
        })
    })
}

exports.Delete_Lesson = function (req, res) {
    OpenLesson.findAll({
        ID: req.body.ID
    }).then(deleted_lessons => {
        deleted_lessons[0].destroy().then(() => {
            res.json(req.body.ID +". ders başarıyla silindi");
        });
    })
}
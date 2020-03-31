'use strict';

var StartUser = require('../model/StartUserModel');

exports.List_StartUsers = function (req, res) {
    StartUser.findAll({}).then(StartUsers => {
        res.json({
            StartUsers: StartUsers
        });
    })
};

exports.Add_StartUser = function (req, res) {
    StartUser.create({
        ID: req.body.ID,
        Name: req.body.Name,
        Surname: req.body.Surname,
        Email: req.body.Email,
        Telephone: req.body.Telephone,
        Password: req.body.Password
    }).then(created_startUser => {
        res.json({
            created_startUser: created_startUser
        });
    })
};

exports.Update_StartUser = function (req, res) {
    StartUser.findAll({
        where: {
            ID: req.body.ID
        }
    }).then(updated_startUser => {
        updated_startUser[0].update({
            Name: req.body.Name,
            Surname: req.body.Surname,
            Email: req.body.Email,
            Telephone: req.body.Telephone,
            Password: req.body.Password
        }, {
            returning: true
        }).then(returning_startUser => {
            res.json({
                returning_startUser
            });
        })
    })
}

exports.Delete_StartUser = function (req, res) {
    StartUser.findAll({
        ID: req.body.ID
    }).then(deleted_startUsers => {
        deleted_startUsers[0].destroy().then(() => {
            res.json(req.body.ID +". başlangıç kullanıcısı başarıyla silindi");
        });
    })
}
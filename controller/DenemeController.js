'use strict';

var Deneme = require('../model/DenemeModel.js');

exports.denemeleri_listele = function (req, res) {
    Deneme.findAll({}).then(denemeler => {
        res.json({
            denemeler: denemeler
        });
    })
};

exports.deneme_ekle = function (req, res) {
    Deneme.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }).then(created_deneme => {
        res.json({
            created_deneme: created_deneme
        });
    })
};

exports.deneme_guncelle = function (req, res) {
    Deneme.findAll({
        where: {
            id: req.body.id
        }
    }).then(updated_deneme => {
        updated_deneme[0].update({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }, {
            returning: true
        }).then(returning_deneme => {
            res.json({
                returning_deneme
            });
        })
    })
}

exports.deneme_sil = function (req, res) {
    Deneme.findAll({
        where: req.body.id
    }).then(delete_deneme => {
        delete_deneme[0].destroy().then(() => {
            res.json(req.body.id +". deneme başarıyla silindi");
        });
    })
}
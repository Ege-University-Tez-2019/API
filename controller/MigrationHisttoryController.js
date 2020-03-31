'use strict';

var MigrationHistory = require('../model/MigrationHistoryModel.js');

exports.List_Migrations = function (req, res) {
    MigrationHistory.findAll({}).then(Migrations => {
        res.json({
            Migrations: Migrations
        });
    })
};

exports.Add_Migration = function (req, res) {
    MigrationHistory.create({
        MigrationID: req.body.MigrationID,
        ContextKey: req.body.ContextKey,
        Model: req.body.Model,
        ProductVersion: req.body.ProductVersion
    }).then(created_migration => {
        res.json({
            created_migration: created_migration
        });
    })
};

exports.Update_Migration = function (req, res) {
    MigrationHistory.findAll({
        where: {
            MigrationID: req.body.MigrationID,
            ContextKey: req.body.ContextKey
        }
    }).then(updated_migration => {
        updated_migration[0].update({
            Model: req.body.Model,
            ProductVersion: req.body.ProductVersion
        }, {
            returning: true
        }).then(returning_migrations => {
            res.json({
                returning_migrations
            });
        })
    })
}

exports.Delete_Migration = function (req, res) {
    MigrationHistory.findAll({
        MigrationID: req.body.MigrationID,
        ContextKey: req.body.ContextKey
    }).then(deleted_migrations => {
        deleted_migrations[0].destroy().then(() => {
            res.json(req.body.MigrationID +". migration başarıyla silindi");
        });
    })
}
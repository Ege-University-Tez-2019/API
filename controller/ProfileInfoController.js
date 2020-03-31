'use strict';

var ProfileInfo = require('../model/ProfileInfoModel');

exports.List_ProfileInfos = function (req, res) {
    ProfileInfo.findAll({}).then(ProfileInfos => {
        res.json({
            ProfileInfos: ProfileInfos
        });
    })
};

exports.Add_ProfileInfo = function (req, res) {
    ProfileInfo.create({
        ID: req.body.ID,
        Expertise: req.body.Expertise,
        Interest: req.body.Interest,
        SchoolInfo: req.body.SchoolInfo,
        BusinessInfo: req.body.BusinessInfo,
        Balance: req.body.Balance,
        IsBanned: req.body.IsBanned
    }).then(created_profileInfo => {
        res.json({
            created_profileInfo: created_profileInfo
        });
    })
};

exports.Update_ProfileInfo = function (req, res) {
    ProfileInfo.findAll({
        where: {
            ID: req.body.ID
        }
    }).then(updated_profileInfo => {
        updated_profileInfo[0].update({
            Expertise: req.body.Expertise,
            Interest: req.body.Interest,
            SchoolInfo: req.body.SchoolInfo,
            BusinessInfo: req.body.BusinessInfo,
            Balance: req.body.Balance,
            IsBanned: req.body.IsBanned
        }, {
            returning: true
        }).then(returning_profileInfo => {
            res.json({
                returning_profileInfo
            });
        })
    })
}

exports.Delete_ProfileInfo = function (req, res) {
    ProfileInfo.findAll({
        ID: req.body.ID
    }).then(deleted_profileInfos => {
        deleted_profileInfos[0].destroy().then(() => {
            res.json(req.body.ID +". profil başarıyla silindi");
        });
    })
}
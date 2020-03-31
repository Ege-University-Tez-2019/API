'use strict';
var denemeController = require('../controller/DenemeController.js');
var MigrationHisttoryController = require('../controller/MigrationHisttoryController.js');
var OpenLessonController = require('../controller/OpenLessonController.js');
var ProfileInfoController = require('../controller/ProfileInfoController.js')
var StartUserController = require('../controller/StartUserController.js');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Hello Sir')
    });
    app.route('/deneme')
        .get(denemeController.denemeleri_listele)
        .post(denemeController.deneme_ekle);
    app.route('/deneme/update').post(denemeController.deneme_guncelle);
    app.route('/deneme/delete').post(denemeController.deneme_sil);

    app.route('/migration')
        .get(MigrationHisttoryController.List_Migrations)
        .post(MigrationHisttoryController.Add_Migration);
    app.route('/migration/update').post(MigrationHisttoryController.Update_Migration);
    app.route('/migration/delete').post(MigrationHisttoryController.Delete_Migration);

    app.route('/lesson')
        .get(OpenLessonController.List_Lessons)
        .post(OpenLessonController.Add_Lesson);
    app.route('/lesson/update').post(OpenLessonController.Update_Lesson);
    app.route('/lesson/delete').post(OpenLessonController.Delete_Lesson);

    app.route('/profileinfo')
        .get(ProfileInfoController.List_ProfileInfos)
        .post(ProfileInfoController.Add_ProfileInfo);
    app.route('/profileinfo/update').post(ProfileInfoController.Update_ProfileInfo);
    app.route('/profileinfo/delete').post(ProfileInfoController.Delete_ProfileInfo);

    app.route('/startuser')
        .get(StartUserController.List_StartUsers)
        .post(StartUserController.Add_StartUser);
    app.route('/startuser/update').post(StartUserController.Update_StartUser);
    app.route('/startuser/delete').post(StartUserController.Delete_StartUser);
};
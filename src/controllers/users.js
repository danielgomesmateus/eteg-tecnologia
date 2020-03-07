const UserModel = require('../models/users')();

module.exports.index = function(app, req, res) {
    UserModel.findAll().then(users => {
        res.status(200).json({action: 'success', result: users});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.get = function(app, req, res) {
    UserModel.findOne({ where: req.params }).then(user => {
        res.status(200).json({action: 'success', result: user});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.save = function(app, req, res) {
    UserModel.create(req.body).then(user => {
        res.status(200).json({action: 'success', result: user});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.update = function(app, req, res) {
    UserModel.update(req.body, { where: req.params }).then(user => {
        res.status(200).json({action: 'success', result: user});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.delete = function(app, req, res) {
    UserModel.destroy({ where: req.params }).then(user => {
        res.status(200).json({action: 'success', result: user});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}
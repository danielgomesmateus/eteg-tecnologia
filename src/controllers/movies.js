const MovieModel = require('../models/movies')();

module.exports.index = function(app, req, res) {
    MovieModel.findAll().then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.get = function(app, req, res) {
    MovieModel.findOne({ where: req.params }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.save = function(app, req, res) {
    MovieModel.create(req.body).then(rent => {
        res.status(200).json({action: 'success', result: rent});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.update = function(app, req, res) {
    MovieModel.update(req.body, { where: req.params }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.delete = function(app, req, res) {
    MovieModel.destroy({ where: req.params }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}
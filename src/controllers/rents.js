const RentModel = require('../models/rents')();
const UserModel = require('../models/users')();
const MovieModel = require('../models/movies')();

module.exports.index = function(app, req, res) {
    RentModel.findAll({ include: [UserModel, MovieModel] }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err.message});
    });
}

module.exports.get = function(app, req, res) {
    RentModel.findOne({ where: req.params, include: [UserModel, MovieModel] }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err.message});
    });
}

module.exports.save = function(app, req, res) {
    RentModel.create(req.body, { individualHooks: true }).then(rent => {
        res.status(200).json({action: 'success', result: rent});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err.message});
    });
}

module.exports.renew = function(app, req, res) {
    RentModel.update(req.body, { where: req.params, individualHooks: true }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err.message});
    });
}
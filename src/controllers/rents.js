const RentModel = require('../models/rents')();
const UserModel = require('../models/users')();

module.exports.index = function(app, req, res) {
    RentModel.findAll().then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.get = function(app, req, res) {
    RentModel.findOne({ where: req.params }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.save = function(app, req, res) {
    RentModel.create(req.body).then(rent => {
        res.status(200).json({action: 'success', result: rent});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}

module.exports.renew = function(app, req, res) {
    RentModel.update(req.body, { where: req.params }).then(rents => {
        res.status(200).json({action: 'success', result: rents});
    })
    .catch(function (err) {
        res.status(422).json({action: 'error', result: err});
    });
}
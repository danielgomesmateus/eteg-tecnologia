const { check, validationResult } = require('express-validator');
const { cpf } = require('cpf-cnpj-validator');
const moment = require('moment');

module.exports = function(app) {
  app.get('/users/', function(req, res, next) {
    app.src.controllers.users.index(app, req, res);
  });
  
  app.get('/users/:id/', function(req, res, next) {
    app.src.controllers.users.get(app, req, res);
  });
  
  app.put('/users/update/:id/', function(req, res, next) {
    app.src.controllers.users.update(app, req, res);
  });
  
  app.post('/users/add', 
    [
      check('nome')
        .isLength({min: 3, max: 100})
        .withMessage("Nome informado não é válido."),
      check('cpf')
        .custom(value => {
          if(!cpf.isValid(value)) {
            return Promise.reject('CPF informado não é válido.');
          }
          return Promise.resolve();
        })
        .withMessage("CPF informado não é válido."),
      check('data_nascimento')
        .isISO8601().toDate()
        .custom(value => {
          if(moment().diff(value, 'years', false) < 18) {
            return Promise.reject('É preciso ser maior de 18 anos.');
          }
          return Promise.resolve();
        })
        .withMessage("Data de nascimento informado não é válido."),
    ], 
    function(req, res, next) {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      
      app.src.controllers.users.save(app, req, res);
  });
  
  app.delete('/users/delete/:id', function(req, res, next) {
    app.src.controllers.users.delete(app, req, res);
  });
}

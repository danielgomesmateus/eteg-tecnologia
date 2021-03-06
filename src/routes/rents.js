const { check, validationResult } = require('express-validator');

module.exports = function(app) {
  app.get('/rents/', function(req, res) {
    app.src.controllers.rents.index(app, req, res);
  });
  
  app.get('/rents/:id/', function(req, res) {
    app.src.controllers.rents.get(app, req, res);
  });

  app.post('/rents/add/', 
    [
      check('filme_id')
        .isDecimal()
        .withMessage("ID do filme informado não é válido"),
      check('usuario_id')
        .isDecimal()
        .withMessage("ID do usuário informado não é válido."),
      check('data_devolucao')
        .isISO8601().toDate()
        .withMessage("Data de devolução informado não é válido."),
    ], 
    function(req, res) {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      
      app.src.controllers.rents.save(app, req, res);
    }
  );

  app.put('/rents/renew/:id/', function(req, res) {
    app.src.controllers.rents.renew(app, req, res);
  });
}

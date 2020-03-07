const { check, validationResult } = require('express-validator');

module.exports = function(app) {
  app.get('/movies/', function(req, res, next) {
    app.src.controllers.movies.index(app, req, res);
  });
  
  app.get('/movies/:id/', function(req, res, next) {
    app.src.controllers.movies.get(app, req, res);
  });
  
  app.put('/movies/update/:id/', function(req, res, next) {
    app.src.controllers.movies.update(app, req, res);
  });
  
  app.post('/movies/add', 
    [
      check('nome')
        .isLength({min: 5, max: 50})
        .withMessage("Nome informado não é válido."),
      check('genero')
        .isLength({min: 5, max: 35})
        .withMessage("Gênero informado não é válido."),
      check('diretor')
        .isLength({min: 5, max: 35})
        .withMessage("Diretor informado não é válido."),
      check('quantidade')
        .isDecimal()
        .withMessage("Quantidade informado não é válido."),
    ], 
    function(req, res, next) {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      
      app.src.controllers.movies.save(app, req, res);
  });
  
  app.delete('/movies/delete/:id', function(req, res, next) {
    app.src.controllers.movies.delete(app, req, res);
  });
}

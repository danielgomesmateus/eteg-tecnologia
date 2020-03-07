const { Sequelize, sequelize } = require('../../config/db');
const Model = Sequelize.Model;

class Movie extends Model {}

Movie.init({
   nome: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  genero: {
    type: Sequelize.STRING(35),
    allowNull: false
  },
  diretor: {
    type: Sequelize.STRING(35),
    allowNull: false
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, 
{ 
  sequelize, 
  timestamps: false,
  modelName: 'filme' 
});

module.exports = function() {
  return Movie;
}
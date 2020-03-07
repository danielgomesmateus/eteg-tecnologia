const { Sequelize, sequelize } = require('../../config/db');
const Model = Sequelize.Model;

class Rent extends Model {}

Rent.init({
  filme_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  data_locacao: {
    type: Sequelize.DATE,
    allowNull: false
  },
  data_devolucao: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, 
{ 
  sequelize, 
  timestamps: false,
  modelName: 'locacao' 
});

module.exports = function() {
  return Rent;
}
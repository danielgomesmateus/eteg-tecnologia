const { Sequelize, sequelize } = require('../../config/db');
const Model = Sequelize.Model;

const UserModel = require('./users')();
const MovieModel = require('./movies')();

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
  },
  renovacoes: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, 
{ 
  sequelize, 
  timestamps: false,
  modelName: 'locacao',
  hooks: {
    beforeUpdate: (rent)  => {
      if (rent.renovacoes >= 2) {
        return Promise.reject(new Error("Este filme não pode ser renovado novamente."));
      }
      rent.renovacoes += 1;
    },
    beforeCreate: (rent) => {
      return Rent.findAndCountAll({ where: { 'filme_id': rent.filme_id, 'usuario_id': rent.usuario_id }})
        .then(rent => {
          if (rent.count >= 5) {
            return Promise.reject(new Error("Você não pode alugar mais do que 5 filmes por vez."));
          }
        });
    }
  }
});

Rent.belongsTo(MovieModel, { foreignKey: 'filme_id' });
Rent.belongsTo(UserModel, { foreignKey: 'usuario_id' });

module.exports = function() {
  return Rent;
}
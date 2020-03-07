const { Sequelize, sequelize } = require('../../config/db');
const Model = Sequelize.Model;

class User extends Model {}

User.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  sexo: {
    type: Sequelize.STRING(1),
    allowNull: true
  },
  cpf: {
    type: Sequelize.STRING(14),
    allowNull: false
  },
  data_nascimento: {
   type: Sequelize.DATE,
   allowNull: false
 }
}, 
{ 
  sequelize, 
  timestamps: false,
  modelName: 'usuario' 
});

module.exports = function() {
  return User;
}
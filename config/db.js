const Sequelize = require('sequelize');

const host = process.env.DB_HOST || '172.17.0.1';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASS || 'password';
const database = process.env.DB_DATABASE || 'db_eteg';

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados. Erro: ', err);
  });

module.exports = { Sequelize, sequelize };
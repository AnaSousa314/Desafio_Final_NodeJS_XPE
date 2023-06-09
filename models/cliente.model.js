import Sequelize from "sequelize";
import db from "../config/instances/postgres/postgres.js";

const Cliente = db.define('clientes',
{
  clienteId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },

  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {underscored: true});



export default Cliente;
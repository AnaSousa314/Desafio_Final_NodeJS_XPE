import Sequelize from "sequelize";
import db from "../config/instances/postgres/postgres.js";

const Autor = db.define('autores',
{
  autorId: {
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

  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {underscored: true});

export default Autor;
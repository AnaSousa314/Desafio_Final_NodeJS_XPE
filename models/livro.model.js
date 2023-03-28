import Sequelize from "sequelize";
import db from "../config/instances/postgres/postgres.js";
import Autor from "./autor.model.js";

const Livro = db.define('livros',
{
  livroId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },

  valor: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },

  estoque: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // autorId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // }
}, {underscored: true});

Livro.belongsTo(Autor, {foreignKey: "autorId"});

export default Livro;
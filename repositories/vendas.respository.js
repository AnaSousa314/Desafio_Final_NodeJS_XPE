import Cliente from "../models/cliente.model.js";
import Livro from "../models/livro.model.js";
import Venda from "../models/venda.model.js";

async function insertSale(sale){
  try {
    return await Venda.create(sale);
  } catch (error) {
    throw error;
  }
} 


async function getSale(id) {
  try {
    return await Venda.findAll({
      where: {vendaId: id},
      include: [
        {model: Cliente},
        {model: Livro}
      ]
    });
  } catch (error) {
    throw error;
  }
}

async function getSales() {
  try {
    return await Venda.findAll({
      include: [
        {model: Cliente},
        {model: Livro}
      ]
    });
  } catch (error) {
    throw error;
  }
}

async function getSaleByClientId(clientId) {
  try {
    return await Venda.findAll({
      where: {
        clienteId: clientId
      },
      include: [
        {
          model: Cliente
        }
      ]
    });
  } catch (error) {
    throw error;
  }
}

async function getSaleByBookId(bookId) {
  try {
    return await Venda.findAll({
      where: {
        livroId: bookId
      },
      include: [
        {
          model: Livro
        }
      ]
    });
  } catch (error) {
    throw error;
  }
}

async function getSaleByAuthorId(authorId) {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Livro,
          where: { autorId: authorId }
        }

      ]
    });
  } catch (error) {
    throw error;
  }
}

export default {
  getSaleByClientId,
  getSaleByBookId,
  insertSale,
  getSale,
  getSales,
  getSaleByAuthorId
}
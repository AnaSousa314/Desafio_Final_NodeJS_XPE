import VendasRespository from "../repositories/vendas.respository.js";
import ClienteRepository from "../repositories/cliente.repository.js";
import LivroRepsitory from "../repositories/livro.respository.js";

async function createSale(sale) {
  if(!await ClienteRepository.getClient(sale.clienteId)){
    throw new Error("O cliente_id informado não existe");
  }

  const book = await LivroRepsitory.getBook(sale.livroId);

  if(!book) {
    throw new Error("O livro_id informado não existe!")
  }

  if(book.estoque > 0) {
    sale.valor = book.valor;
    sale = await VendasRespository.insertSale(sale);
    book.estoque--;
    await LivroRepsitory.updateBook(book);
    return sale;
  } else {
    throw new Error("O livro informado ao possui estoque.");
  }
}

async function getSale(id) {
  return await VendasRespository.getSale(id);
}

async function getSales(clientId, bookId, authorId) {
  if(clientId){
    return await VendasRespository.getSaleByClientId(clientId);
  }
  if(bookId){
    return await VendasRespository.getSaleByBookId(bookId);
  }
  if(authorId){
    return await VendasRespository.getSaleByAuthorId(authorId);
  }
  return await VendasRespository.getSales();
}


export default {
  createSale,
  getSale,
  getSales
}
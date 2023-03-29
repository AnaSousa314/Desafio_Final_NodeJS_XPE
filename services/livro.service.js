import LivroRespository from "../repositories/livro.respository.js";
import VendasRespository from "../repositories/vendas.respository.js";

async function createBook(book) {
  return await LivroRespository.insertBook(book)
}

async function updateBook(book) {
  if(await LivroRespository.getBook(book.livroId)){
    return await LivroRespository.updateBook(book);
  }
  throw new Error("O livro_id informado não existe!");
}

async function deleteBook(id){
  let existsBook = await LivroRespository.getBook(id);
  if(!existsBook){
    throw new Error("O livro_id informado não existe!");
  }

  let existsSale = await VendasRespository.getSaleByBookId(id);
  if(existsSale > 0) {
    throw new Error("Possui uma venda.")
  }

  await LivroRespository.deleteBook(id);
}

export default {
  createBook,
  updateBook,
  deleteBook
}
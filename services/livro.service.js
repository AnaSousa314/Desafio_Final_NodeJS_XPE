import LivroRespository from "../repositories/livro.respository.js";

async function createBook(book) {
  return await LivroRespository.insertBook(book)
}

async function updateBook(book) {
  return await LivroRespository.updateBook(book);
}

export default {
  createBook,
  updateBook
}
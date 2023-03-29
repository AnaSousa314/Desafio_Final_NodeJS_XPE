import LivroRepository from "../repositories/livro.respository.js"
import AutorRespository from "../repositories/autor.respository.js";

async function createAuthor(author) {
  return await AutorRespository.insertAuthor(author);
}

async function updateAuthor(author) {
  if ( await AutorRespository.getAuthor(author.autorId)){
    return await AutorRespository.updateAuthor(author);
  }
  throw new Error("O autor_id informado não existe!");
}

async function getAuthors() {
  return await AutorRespository.getAuthors();
}

async function getAuthor(id) {
  return await AutorRespository.getAuthor(id);
}

async function deleteAuthor(id) {
  let existsAuthor = await AutorRespository.getAuthor(id);

  if (!existsAuthor) {
    throw new Error("O cliente_id informado não existe!")
  }

  let existsBook = await LivroRepository.getBookByAuthorId(id)

  console.log(existsBook)

  if (existsBook.length > 0) {
    throw new Error("Possui livro(s) cadastrados")
  }
  await AutorRespository.deleteAuthor(id)
}

export default {
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthors,
  getAuthor
}
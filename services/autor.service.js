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

export default {
  createAuthor,
  updateAuthor
}
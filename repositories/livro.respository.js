import Autor from "../models/autor.model.js";
import Livro from "../models/livro.model.js"

async function insertBook(book) {
  try {
    return await Livro.create(book)
  } catch (error) {
    next(error);
  }
}

async function updateBook(book) {
  try {
    await Livro.update(book,{
      where: {
        livroId: book.livroId
      }
    });
    return await getBook(book.livroId)
  } catch (error) {
    throw error;
  }
}


async function getBook(id) {
  try {
    return await Livro.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function getBookByAuthorId(authorId) {
  try {
    return await Livro.findAll({
      where: {
        autorId: authorId
      },
      include: [
        {
          model: Autor
        }
      ]
    });
  } catch (error) {
    throw error;
  }
}


async function deleteBook(id) {
  try {
    await Livro.destroy({
      where:{
        livroId: id
      }
    });
  } catch (error) {
    throw error;
  }
}


export default {
  insertBook,
  getBookByAuthorId,
  updateBook,
  getBook,
  deleteBook
}

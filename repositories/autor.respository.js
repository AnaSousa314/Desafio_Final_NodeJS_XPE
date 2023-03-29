import Autor from "../models/autor.model.js";

async function insertAuthor(author) {
  try {
    return await Autor.create(author);
  } catch (error) {
    throw error;
  }
}

async function updateAuthor(author) {
  try {
    await Autor.update(author,{
      where: {
        autorId: author.autorId
      }
    });
    return await getAuthor(author.autorId);
  } catch (error) {
    throw error;
  }
}

async function getAuthor(id) {
  try {
    return await Autor.findByPk(id);
  } catch (error) {
    throw error
  }
}

async function deleteAuthor(id) {
  try {
    await Autor.destroy({
      where: {
        autorId: id
      }
    })
  } catch (error) {
    throw error;
  }
}

export default {
  insertAuthor,
  updateAuthor,
  getAuthor,
  deleteAuthor
}
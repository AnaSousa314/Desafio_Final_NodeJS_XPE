import Autor from "../models/autor.model.js";
import Livro from "../models/livro.model.js"

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


export default {
  getBookByAuthorId
}

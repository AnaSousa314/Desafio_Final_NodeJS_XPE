import AutorService from "../services/autor.service.js";


async function createAuthor(req, res, next) {
  try {
    let author = req.body

    if (!author.nome || !author.email || !author.telefone) {
      throw new Error("Nome, email e telefone são obrigatórios!");
    }

    author = await AutorService.createAuthor(author);
    res.status(201).send(author);
    logger.info(`POST /autor - ${JSON.stringify(author)}`);
  } catch (error) {
    next(error)
  }
}

async function updateAuthor(req, res, next) {
  try {
    let author = req.body

    if (!author.autorId || !author.nome || !author.email || !author.telefone) {
      throw new Error("Autor ID, nome, email e telefone são obrigatórios!");
    }

    author = await AutorService.updateAuthor(author);
    res.status(200).send(author);
    logger.info(`PUT /autor - ${JSON.stringify(author)}`);
  } catch (error) {
    next(error)
  }
}

export default {
  createAuthor,
  updateAuthor
}

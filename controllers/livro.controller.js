import LivroService from "../services/livro.service.js";

async function createBook(req, res, next) {
  try {
    let book = req.body;

    if(!book.nome || !book.valor || !book.estoque || !book.autorId) {
      throw new Error("Nome, valor, estoque e autor_id são obrigatórios!");
    }

    book = await LivroService.createBook(book);
    res.status(201).send(book);
    logger.info(`POST /livro - ${JSON.stringify(book)}`);
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  try {
    let book = req.body;

    if(!book.livroId || !book.valor || !book.estoque) {
      throw new Error("Livro ID, valor e estoque são obrigatórios!");
    }

    if (book.nome || book.autorId) {
      throw new Error("Proibido mudar o nome ou o autor do livro!")
    }

    book = await LivroService.updateBook(book);
    console.log(book)
    res.status(200).send(book)
    logger.info(`PUT /livro - ${JSON.stringify(book)}`)
  } catch (error) {
    next(error);
  }
}

export default {
  createBook,
  updateBook
}
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
    
    console.log(typeof book.valor);
    book = await LivroService.updateBook(book);
    // console.log(book)
    res.status(200).send(book)
    logger.info(`PUT /livro - ${JSON.stringify(book)}`)
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  try {
    await LivroService.deleteBook(req.params.id);
    res.status(204)
    res.end()
    logger.info(`DELETE /livro/${req.params.id}`)
  } catch (error) {
    next(error)
  }
}

export default {
  createBook,
  updateBook,
  deleteBook
}
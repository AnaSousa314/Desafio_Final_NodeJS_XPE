import LivroInfoService from "../services/livroInfo.service.js";

async function createBookInfo(req, res, next){
  try {
    let bookInfo = req.body;

    if(!bookInfo.livroId || !bookInfo.descricao || !bookInfo.paginas || !bookInfo.editora) {
      throw new Error("Livro ID, descrição, páginas e editora são obrigatórios!");
    }
    await LivroInfoService.createBookInfo(bookInfo);
    res.status(201);
    res.send(bookInfo);
  } catch (error) {
    next(error);
  }
}

async function updateBookInfo(req, res, next) {
  try {
    let bookInfo =  req.body;

    if (!bookInfo.livroId) {
      throw new Error("Livro ID é obrigatório!");
    }

    await LivroInfoService.updateBookInfo(bookInfo);
    res.status(200);
    res.send(bookInfo);
    loggers.info(`PUT /livro/info - ${JSON.stringify(bookInfo)}`)
  } catch (error) {
    next(error);
  }
}

export default {
  createBookInfo,
  updateBookInfo
}
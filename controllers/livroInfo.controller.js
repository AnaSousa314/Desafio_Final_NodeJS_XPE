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

export default {
  createBookInfo
}
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
    logger.info(`POST /livro/info - ${JSON.stringify(bookInfo)}`)
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
    logger.info(`PUT /livro/info - ${JSON.stringify(bookInfo)}`)
  } catch (error) {
    next(error);
  }
}

async function deleteBookInfo(req, res, next) {
  try {
    await LivroInfoService.deleteBookInfo(parseInt(req.params.id))
    res.status(204)
    res.end()
    logger.info(`DELETE /livro/info/${req.params.id}`)
  } catch (error) {
    next(error);
  }
}

async function createBookReview(req, res, next) {
  try {
    let bookReview = req.body.avaliacoes;
    let bookId = req.params.id;
    if (!bookId || !bookReview) {
      throw new Error("Livro ID e Avaliações são obrigatórios!");
    }
    await LivroInfoService.createBookReview(bookReview, bookId);
    res.status(201)
    res.send(bookReview);
    logger.info(`POST /livro/avaliacao/${bookId}`)
  } catch (error) {
    next(error);
  }
}
// async function createBookReview(req, res, next) {
//   try {
//     let bookReview = req.body;
//     let bookId = req.params.id;
//     console.log({controller: bookReview})
//     if (!bookReview.livroId || !bookReview.avaliacoes) {
//       throw new Error("Livro ID e Avaliações são obrigatórios!");
//     }
//     await LivroInfoService.createBookReview(bookReview.avaliacoes, bookReview.livroId);
//     res.status(201)
//     res.send(bookReview);
//     logger.info(`POST /livro/info/avaliacao - ${JSON.stringify(bookReview)}`)
//   } catch (error) {
//     next(error);
//   }
// }


async function deleteBookReview(req, res, next) {
  try {
    await LivroInfoService.deleteBookReview(req.params.id, req.params.index);
    res.status(204)
    res.end()
    logger.info(`DELETE /livro/info/${req.params.id}/avaliacao/${req.params.index}`);
  } catch (error) {
    next(error);
  }
}

export default {
  createBookInfo,
  updateBookInfo,
  deleteBookInfo,
  createBookReview,
  deleteBookReview
}
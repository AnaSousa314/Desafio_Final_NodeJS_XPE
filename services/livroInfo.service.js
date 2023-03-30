import LivroInfoRepository from "../repositories/livroInfo.repository.js";

async function createBookInfo(bookInfo) {
  await LivroInfoRepository.createBookInfo(bookInfo);
}

async function getBookInfos() {
  return await LivroInfoRepository.getBookInfos();
}

async function getBookInfo(bookId) {
  return await LivroInfoRepository.getBookInfo(bookId);
}

async function createBookInfoAvaliacoes(avaliacao, bookInfoId) {
  await LivroInfoRepository.createBookInfoAvaliacoes(avaliacao, bookInfoId);
}



export default {
  createBookInfo,
  getBookInfo,
  getBookInfos,
  createBookInfoAvaliacoes
}
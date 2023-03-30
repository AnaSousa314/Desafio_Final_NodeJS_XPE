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


async function updateBookInfo(bookId) {
  await LivroInfoRepository.updateBookInfo(bookId);
}

async function deleteBookInfo(bookId) {
  await LivroInfoRepository.deleteBookInfo(bookId);
}

async function createBookReview(review, bookId) {
  return await LivroInfoRepository.createBookReview(review, bookId);
}

async function deleteBookReview(bookId, index) {
  await LivroInfoRepository.deleteBookReview(parseInt(bookId), index);
}

export default {
  createBookInfo,
  getBookInfo,
  getBookInfos,
  updateBookInfo,
  deleteBookInfo,
  createBookInfo,
  createBookReview,
  deleteBookReview
}
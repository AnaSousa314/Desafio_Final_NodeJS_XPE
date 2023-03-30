import LivroInfoSchema from "../schemas/livro.schema.js";
import { connect } from "../config/instances/mongodb/mongodb.js";

async function createBookInfo(bookInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    bookInfo = new LivroInfo(bookInfo);
    await bookInfo.save()
  } catch (error) {
    throw error;
  }
}

async function getBookInfo(bookId) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    return await LivroInfo.findOne({livroId: bookId});
  } catch (error) {
    throw error;
  }
}

async function getBookInfos() {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    return await LivroInfo.find({});
  } catch (error) {
    throw error;
  }
}

async function updateBookInfo(bookInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    await LivroInfo.findOneAndUpdate({livroId: bookInfo.livroId}, bookInfo);
  } catch (error) {
    throw error;
  }
}

async function createBookInfoAvaliacoes(avaliacao, bookInfoId) {
  try {
    const bookInfo = await getBookInfo(bookInfoId);
    bookInfo.avaliacoes.push(avaliacao);
    await updateBookInfo(bookInfo);
  } catch (error) {
    throw error;
  }
}

async function deleteBookInfo(bookId) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema);
    await LivroInfo.deleteOne({livroId: bookId});
  } catch (error) {
    throw error;
  }
}

export default {
  createBookInfo,
  getBookInfo,
  getBookInfos,
  updateBookInfo,
  createBookInfoAvaliacoes,
  deleteBookInfo
}
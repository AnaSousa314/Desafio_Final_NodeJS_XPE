import mongoose from "mongoose";
import AvaliacaoSchema from "./avaliacao.sechema.js";

const LivroSchema = new mongoose.Schema(
  {
    livroId: Integer,
    descricao: String,
    paginas: Integer,
    editora: String,
    avaliacoes:[AvaliacaoSchema]
  }, {collection: "livroInfo"}
);

export default LivroSchema;
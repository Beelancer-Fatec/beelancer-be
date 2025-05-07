import mongoose from "mongoose";
import { postImagemSchema } from "./schemas/PostImagemSchema";
const postSchema = new mongoose.Schema({
  freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "freelancer" },
  imagens: [postImagemSchema],
  titulo: String,
  descricao: String,
  qtd_like: Number,
  data_criacao: String,
  data_atualizacao: String,
});

const Posts = mongoose.model("post", postSchema);
export default Posts;

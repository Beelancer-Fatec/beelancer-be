import mongoose from "mongoose";
import { postImagemSchema } from "./schemas/PostImagemSchema.js";
const postSchema = new mongoose.Schema(
  {
    freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "freelancer" },
    imagens: [postImagemSchema],
    titulo: String,
    descricao: String,
    qtd_like: Number,
  },
  {
    timestamps: {
      createdAt: "data_criacao",
      updatedAt: "data_atualizacao",
    },
  }
);

const Posts = mongoose.model("post", postSchema);
export default Posts;

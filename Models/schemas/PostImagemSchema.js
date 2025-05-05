import mongoose from "mongoose";

export const postImagemSchema = new mongoose.Schema({
  titulo: String,
  imagemURL: String,
});

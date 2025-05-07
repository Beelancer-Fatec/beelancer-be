import mongoose from "mongoose";

export const enderecoSchema = new mongoose.Schema({
  estado: String,
  cidade: String,
  bairro: String,
  rua: String,
  numero: String,
  complemento: String,
  cep: String,
});

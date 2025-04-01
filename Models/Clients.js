import mongoose from "mongoose";
const enderecoSchema = new mongoose.Schema({
  endereco: String,
  bairro: String,
  numero: String,
  complemento: String,
  CEP: String,
});
const clientSchema = new mongoose.Schema({
  enderecos: [enderecoSchema],
  classificacao: Number,
  contatos: [String],
});
const Clients = mongoose.model("client", clientSchema);
export default Clients;


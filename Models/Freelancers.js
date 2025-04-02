import mongoose from "mongoose";
const enderecoSchema = new mongoose.Schema({
  endereco: String,
  bairro: String,
  numero: String,
  complemento: String,
  CEP: String,
});

const freelancerSchema = new mongoose.Schema({
  especialidades: [String],
  enderecos: [enderecoSchema],
  classificacao: Number
});
const Freelancers = mongoose.model('freelancer',freelancerSchema);
export default Freelancers
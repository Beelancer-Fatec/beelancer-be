import mongoose from "mongoose";
import { enderecoSchema } from "./enderecoSchema.js";

const servicoSchema = new mongoose.Schema({
  tipo: String,
  descricao: String,
  detalhes: String,
  urgente: Boolean
}, { _id: false });

const chamadoSchema = new mongoose.Schema({
  client_id: { type: mongoose.Schema.Types.ObjectId, ref: "client" },
  freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "freelancer" },
  titulo: String,
  descricao: String,
  data_realizacao: Date,
  tipo_servico: [String],
  valor_a_pagar: mongoose.Types.Decimal128,
  data_criacao: Date,
  data_edicao: Date,
  status: String,
  endereco: enderecoSchema
});

const Chamados = mongoose.model("chamado", chamadoSchema);
export default Chamados;

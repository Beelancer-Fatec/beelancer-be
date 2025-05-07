import mongoose from "mongoose";
import { enderecoSchema } from "./schemas/EnderecoSchema.js";

const clientSchema = new mongoose.Schema({
  endereco: enderecoSchema,
  classificacao: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

const Clients = mongoose.model("client", clientSchema);
export default Clients;

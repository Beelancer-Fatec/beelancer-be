import mongoose from "mongoose";
import { enderecoSchema } from "./schemas/EnderecoSchema.js";

const freelancerSchema = new mongoose.Schema({
  especialidades: [String],
  classificacao: Number,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  endereco: enderecoSchema
});

const Freelancers = mongoose.model("freelancer", freelancerSchema);
export default Freelancers; 

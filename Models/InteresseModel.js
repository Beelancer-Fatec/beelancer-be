import mongoose from "mongoose";

const interesseSchema = new mongoose.Schema({
  freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "freelancer" },
  chamado_id: { type: mongoose.Schema.Types.ObjectId, ref: "chamado" },
  mensagem: String,
});

const Interesses = mongoose.model("interesse", interesseSchema);
export default Interesses;

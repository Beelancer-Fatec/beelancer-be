import mongoose from "mongoose";

const avaliacaoSchema = new mongoose.Schema({
  client_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "client",
  },
  freelancer_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "freelancer",
  },
  nota: {
    type: Number,
    required: true,
  },
  data_avaliacao: {
    type: Date,
    default: Date.now,
  },
  comentario: {
    type: String,
  },
});

const Avaliacoes = mongoose.model("avaliacao", avaliacaoSchema);
export default Avaliacoes;

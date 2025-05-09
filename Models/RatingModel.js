import mongoose, { Mongoose, Schema } from "mongoose";

const RatingSchema = new Mongoose.Schema({
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: "client" },
    freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: "freelancer" },
    nota: Number,
    data_avaliacao: Date
})
const Rates = mongoose.model("Rate",RatingSchema);
export default Rates;

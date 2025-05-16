import mongoose from "mongoose";
const senha = "beelancer2024";
const connect = () => {
  mongoose.connect(`mongodb+srv://alphadevftc:${senha}@app-beelancer.z1xiuze.mongodb.net/app-beelancer?retryWrites=true&w=majority&appName=App-Beelancer`);
  //mongoose.connect("mongodb://127.0.0.1:27017/app-beelancer")
  const connection = mongoose.connection;
  connection.on("error", () => {
    console.log("ERRO AO CONECTAR COM MONGO DB");
  });
  connection.on("open", () => {
    console.log("CONECTADO AO MONGO DB COM SUCESSO");
  });
};
connect();
export default mongoose;

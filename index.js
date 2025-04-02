import express from "express";
import mongoose from "mongoose";
import Users from "./Models/Users.js";
import Clients from "./Models/Clients.js";
import Freelancers from "./Models/Freelancers.js";
import userRoutes from "./Routes/usersRoutes.js";
import freelancersServices from "./Services/freelancersServices.js";
import usersServices from "./Services/usersServices.js";
const app = express();

//CONFIGURACAO EXPRESS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", userRoutes);

app.get("/", async (req, res) => {
  res.send("API BEELANCERS - BACKEND");
});
//CONEXAO MONGODB
mongoose
  .connect("mongodb://127.0.0.1:27017/BEELANCERS")
  .then((connection) => {
    console.log(`Banco de Dados conectado com sucesso! ${connection}`)
})
  .catch((error) => console.log(error));

//ABRINDO SERVIDOR
const port = 4001;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`SERVIDOR INICIADO localhost:${port}`);
  }
});

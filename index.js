import express from "express";
import mongoose from "./config/db-connection.js";
//MODELS
import Users from "./Models/Users.js";
import Clients from "./Models/Clients.js";
import Freelancers from "./Models/Freelancers.js";
//SERVICES
import freelancersServices from "./Services/freelancersServices.js";
import usersServices from "./Services/usersServices.js";
//ROUTES
import clientRoutes from "./Routes/clientsRoutes.js";
import userRoutes from "./Routes/usersRoutes.js";
//
const app = express();

//CONFIGURACAO EXPRESS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", userRoutes);
app.use("/",clientRoutes)

app.get("/", async (req, res) => {
  res.send("API BEELANCERS - BACKEND");
});

//ABRINDO SERVIDOR
const port = 4001;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`SERVIDOR INICIADO localhost:${port}`);
  }
});

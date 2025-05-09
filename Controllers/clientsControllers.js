import clientsServices from "../Services/clientsServices.js";
import { ObjectId } from "mongodb";
const createClient = async (req, res) => {
  try {
    const { endereco, classificacao, user_id } = req.body;
    await clientsServices.cadClient(endereco, classificacao, user_id);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
};
const getAllClients = async (req, res) => {
  try {
    const clients = await clientsServices.getAll();
    res.status(200).json({ clients: clients });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const getAllClientsWithUserDetails = async (req, res) => {
  try {
    const clients = await clientsServices.getAllWithUserDetails();
    res.status(200).json({ clients: clients });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const deleteClient = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await clientsServices.delClient(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const updtClient = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { enderecos, user_id, classificacao } = req.body;
      await clientsServices.updClient(id, enderecos, classificacao, user_id);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getOneClient = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const cliente = await clientsServices.getOne(id);

      if (!cliente) {
        return res.status(404).json({ error: "Cliente Não Encontrado" });
      }

      return res.status(200).json({ client: cliente });
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getOneClientWithUserDetails = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const cliente = await clientsServices.getOneWithUserDetails(id);

      if (!cliente) {
        return res.status(404).json({ error: "Cliente Não Encontrado" });
      }

      return res.status(200).json({ client: cliente });
    } else {
      return res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default {
  updtClient,
  deleteClient,
  createClient,
  getAllClients,
  getOneClient,
  getOneClientWithUserDetails,
  getAllClientsWithUserDetails,
};

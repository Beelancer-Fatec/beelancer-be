import usersServices from "../Services/usersServices.js";
import { ObjectId } from "mongodb";

const createUser = async (req, res) => {
  try {
    const { nome, email, password } = req.body;
    await usersServices.cadUser(nome, email, password);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "ERRO INTERNO NO SERVIDOR" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await usersServices.getAll();
    res.status(200).json({ users: users });
  } catch (error) {
    console.log(error);
  }
};

const updtUser = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { nome, email, password } = req.body;
      usersServices.updUser(id, nome, email, password);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
};
const deleUser = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
        const id = req.params.id;
      usersServices.delUser(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
  }
};

export default { updtUser, createUser, deleUser, getAllUsers };

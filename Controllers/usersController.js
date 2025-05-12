import usersServices from "../Services/usersServices.js";
import { ObjectId } from "mongodb";

const createUser = async (req, res) => {
  try {
    const { nome, email, password, image_URL } = req.body;
    const createdUser = await usersServices.cadUser(
      nome,
      email,
      password,
      image_URL
    );
    res.status(201).json({ createdUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "ERRO INTERNO NO SERVIDOR" });
  }
};

const getUserById = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const user = await usersServices.getById(id);
      if (!user) {
        return res.status(404).json({ error: "Usuário Não Encontrado" });
      }
      res.status(200).json(user);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
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
      const { nome, email, password, image_URL } = req.body;
      const updatedUser = await usersServices.updUser(
        id,
        nome,
        email,
        password,
        image_URL
      );

      if (!updatedUser) {
        return res.sendStatus(404).json({ error: "Usuário Não Encontrado" });
      }

      return res.sendStatus(200).json(updatedUser);
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

export default { updtUser, createUser, deleUser, getAllUsers, getUserById };

import usersServices from "../Services/usersServices.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const JWTSecret = "apibeelancers"


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

const loginUser = async (req,res) =>{
  try{
    const {email,password}=req.body
    if(email !=undefined){
      //EMAIL ENCONTRADO
        const User = await usersServices.getByEmail(email)
      if(User != undefined){
         const Validacao = await bcrypt.compare(password,User.password)

        if(Validacao){  
          jwt.sign(
            { id: User._id, email: User.email },
            JWTSecret,
            { expiresIn: "48h" },
            (error, token) => {
              if (error) {
                res.status(400).json({ error: "Erro ao gerar o token." }); // Bad request
              } else {
                res.status(200).json({ token: token });
              }
            });
        }else{
          res.status(400)
          res.json({err:"SENHA INCORRETA"})
        }
      }else{
        res.status(400)
        res.json({err:"USUARIO NAO ENCONTRADO"})
      }

    }else{
      res.status(400)
      res.json({err:"EMAIL INVALIDO"})
    }
  }catch(error){
    console.log(error)
    res.sendStatus(500)
  }
}
export default { updtUser, createUser, deleUser, getAllUsers, getUserById, loginUser, JWTSecret };

import clientsServices from "../Services/clientsServices.js";
import { ObjectId } from "mongodb";
const createClient = async (req, res) => {
  try {
    const { enderecos, classificacao, contatos } = req.body;
    await clientsServices.cadClient(enderecos, contatos, classificacao);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
};
const getAllClients = async (req,res)=>{
    try{
        const clients = await clientsServices.getAll()
        res.status(200).json({clients:clients})
    }catch(error){
        console.log(error)
    }
}
const deleteClient = async (req,res) =>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            await clientsServices.delClient(id)
            res.sendStatus(204)
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
    }
}
const updtClient = async (req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const {enderecos,contatos,classificacao} = req.body
            await clientsServices.updClient(id,enderecos,contatos,classificacao)
            res.sendStatus(200)
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
    }
}
export default {updtClient,deleteClient,createClient,getAllClients}
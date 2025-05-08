import freelancersServices from "../Services/freelancersServices.js";
import { ObjectId } from "mongodb";

const CreateFreelancer = async(req,res)=>{
    try{
        const {especialidades,enderecos, classificacao,user_id} = req.body;
        await freelancersServices.cadFreela(especialidades,enderecos,classificacao,user_id)
        res.sendStatus(201)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

const GetAllFreelancers = async (req,res)=>{
    try{
        const Freelancers  = await freelancersServices.getAll();
        res.sendStatus(201).json({Freelancers:Freelancers})
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

const GetOneFreelancer = async (req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const Freelancer = await freelancersServices.getOne(id)
            res.sendStatus(201).json({Freelancer:Freelancer})
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

const UpdateFreelancer = async(req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const {especialidades,enderecos,classificacao} = req.body
            await freelancersServices.updFreela(id,especialidades,enderecos,classificacao)
            res.sendStatus(200)

        }else{
            res.sendStatus(400)
        }

    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

const deleteFreelancer = async(req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            await freelancersServices.delFreela(id)
            
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}
export default {deleteFreelancer,UpdateFreelancer,GetAllFreelancers,GetOneFreelancer,CreateFreelancer}
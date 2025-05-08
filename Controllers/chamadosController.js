import chamadosServices from "../Services/chamadosServices.js";
import { ObjectId } from "mongodb";
const getAllChamados = async (req, res) => {
  try {
    const Chamados = chamadosServices.getAll();
    res.sendStatus(200).json({ chamados: Chamados });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
const createChamados = async (req, res) => {
  try {
    const {
      client_id,
      freelancer_id,
      titulo,
      descricao,
      data_realizacao,
      tipo_servico,
      valor_a_pagar,
      data_criacao,
      data_edicao,
      status,
      endereco,
    } = req.body;
    await chamadosServices.cadChamados(client_id,
        freelancer_id,
        titulo,
        descricao,
        data_realizacao,
        tipo_servico,
        valor_a_pagar,
        data_criacao,
        data_edicao,
        status,
        endereco)
        res.sendStatus(201)
  } catch (error) {
    console.log(error);
    res.sendStatus(500)
  }
}

const deleteChamados = async (req,res)=>{
    try{
    if(ObjectId.isValid(req.params.id)){
        const id = req.params.id
        await chamadosServices.delChamado(id)
    }else{
        res.sendStatus()
    }
  }catch(error){
    console.log(error)
    res.sendStatus(500)
  }
}

const updateChamado = async (req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const {client_id,
                freelancer_id,
                titulo,
                descricao,
                data_realizacao,
                tipo_servico,
                valor_a_pagar,
                data_criacao,
                data_edicao,
                status,
                endereco} = req.body
                await chamadosServices.updtChamado(id,{client_id,
                    freelancer_id,
                    titulo,
                    descricao,
                    data_realizacao,
                    tipo_servico,
                    valor_a_pagar,
                    data_criacao,
                    data_edicao,
                    status,
                    endereco,})
        }
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

const GetOneChamado = async (req,res)=>{
    try{
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const chamado = await chamadosServices.getOne(id)
            res.sendStatus(200).json({chamado:chamado})
        }else{
            res.sendStatus(400)
        }
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}
export default {createChamados,deleteChamados,updateChamado,getAllChamados,GetOneChamado}
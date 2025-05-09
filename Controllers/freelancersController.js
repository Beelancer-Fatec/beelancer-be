import freelancersServices from "../Services/freelancersServices.js";
import { ObjectId } from "mongodb";

const CreateFreelancer = async (req, res) => {
  try {
    const { especialidades, classificacao, user_id, endereco } = req.body;
    await freelancersServices.cadFreela(
      especialidades,
      classificacao,
      user_id,
      endereco
    );
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const GetAllFreelancers = async (req, res) => {
  try {
    const Freelancers = await freelancersServices.getAll();
    res.status(200).json({ freelancers: Freelancers });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const GetAllFreelancersWithUserDetails = async (req, res) => {
  try {
    const Freelancers = await freelancersServices.getAllWithUserDetails();
    res.status(200).json({ freelancers: Freelancers });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const GetOneFreelancer = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const Freelancer = await freelancersServices.getOne(id);

      if (!Freelancer) {
        return res.status(404).json({ error: "Freelancer Não Encontrado" });
      }

      return res.status(200).json({ freelancer: Freelancer });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const GetOneFreelancerWithUserDetails = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const Freelancer = await freelancersServices.getOneWithUserDetails(id);

      if (!Freelancer) {
        return res.status(404).json({ error: "Freelancer Não Encontrado" });
      }

      return res.status(200).json({ freelancer: Freelancer });
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const UpdateFreelancer = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { especialidades, enderecos, classificacao } = req.body;
      await freelancersServices.updFreela(
        id,
        especialidades,
        enderecos,
        classificacao
      );
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteFreelancer = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await freelancersServices.delFreela(id);
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
//PROCURANDO FREELANCERS POR ESPECIALIDADE
const GetFreeByEspec = async (req,res)=>{
    try{
        const especialidade = req.params.especialidade

        console.log("Especialidade recebida:", especialidade);  // Verifique o valor aqui!
        const Freelancers = await freelancersServices.getFreelancersByEspecialidade(especialidade)
        res.status(200).json({Freelancers})
    }catch(error){
        console.log(error)

    }
}
export default {
  deleteFreelancer,
  UpdateFreelancer,
  GetAllFreelancers,
  GetOneFreelancer,
  CreateFreelancer,
  GetOneFreelancerWithUserDetails,
  GetAllFreelancersWithUserDetails,
  GetFreeByEspec
};

import interesessServices from "../Services/interesessServices.js";
import { ObjectId } from "mongodb";

const cadastrarInteresse = async (req, res) => {
  try {
    const { freelancer_id, chamado_id, mensagem } = req.body;

    if (!freelancer_id || !chamado_id || !mensagem) {
      return res.sendStatus(400);
    }

    interesessServices.cadastrarInteresse(freelancer_id, chamado_id, mensagem);

    return res.sendStatus(201);
  } catch (err) {
    console.log(`Erro ao cadastrar novo interesse `, err);
  }
};

const getAll = async (req, res) => {
  try {
    const interesses = await interesessServices.getAll();

    return res.status(200).json({ interesses: interesses });
  } catch (err) {
    console.log(`Erro Buscar todos interesses `, err);
  }
};

const getAllByChamadoID = async (req, res) => {
  const chamado_id = req.params.chamado_id;
  try {
    if (!ObjectId.isValid(chamado_id)) {
      return res.sendStatus(400);
    }
    const interesses = await interesessServices.getAllByChamadoID(chamado_id);

    return res.status(200).json({ interesses: interesses });
  } catch (err) {
    console.log(`Erro ao Buscar interesses de um chamado `, err);
  }
};

const getAllByFreelancerID = async (req, res) => {
  const freelancer_id = req.params.freelancer_id;
  try {
    if (!ObjectId.isValid(freelancer_id)) {
      return res.sendStatus(400);
    }
    const interesses = await interesessServices.getAllByFreelancerID(
      freelancer_id
    );

    return res.status(200).json({ interesses: interesses });
  } catch (err) {
    console.log(`Erro ao Buscar interesses de um freelancer `, err);
  }
};

const deleteInteresse = async (req, res) => {
  const id = req.params.id;
  try {
    if (!ObjectId.isValid(id)) {
      return res.sendStatus(400);
    }
    const interesses = await interesessServices.deleteInteresse(id);

    return res.sendStatus(204);
  } catch (err) {
    console.log(`Erro ao deletar Interesse `, err);
  }
};

export default {
  cadastrarInteresse,
  getAll,
  getAllByChamadoID,
  getAllByFreelancerID,
  deleteInteresse,
};

import interesessServices from "../Services/interesessServices.js";
import { ObjectId } from "mongodb";

const cadastrarInteresse = async (req, res) => {
  try {
    const novoInteresse = req.body;

    if (!novoInteresse) {
      return res.sendStatus(400);
    }

    interesessServices.cadastrarInteresse(novoInteresse);

    return res.sendStatus(204);
  } catch (err) {
    console.log(`Erro ao cadastrar novo interesse `, err);
  }
};

export default { cadastrarInteresse };

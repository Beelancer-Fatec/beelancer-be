import Interesses from "../Models/InteresseModel.js";
class InteressesServices {
  async cadastrarInteresse(novoInteresse) {
    const novoInteresseModel = new Interesses(novoInteresse);

    await novoInteresseModel.save();
  }
}
export default new InteressesServices();

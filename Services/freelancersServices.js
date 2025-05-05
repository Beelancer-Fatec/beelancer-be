import Freelancers from "../Models/FreelancerModel.js";

class freleancersServices {
  //LISTAR TODOS OS FREELANCERS
  async getAll() {
    try {
      const freelancers = await Freelancers.find();
      return freelancers;
    } catch (error) {
      console.log(error);
    }
  }

  //CADASTRAR FREELANCER
  async cadFreela(especialidades, contatos, classificacao) {
    try {
      const newFreelas = new Freelancers({
        especialidades,
        contatos,
        classificacao,
      });
      await newFreelas.save();
    } catch (error) {
      console.log(error);
    }
  }

  //DELETANDO UM CLIENTE
  async delFreela(id) {
    try {
      await Freelancers.findByIdAndDelete(id);
      console.log(`Freelancer com o id ${id} foi deletado`);
    } catch (error) {
      console.log(error);
    }
  }

  //ALTERANDO UM CLIENTE
  async updClient(id, especialidades, contatos, classificacao) {
    try {
      await Freelancers.findByIdAndUpdate(
        id,
        especialidades,
        contatos,
        classificacao
      );
    } catch (error) {
      console.log(error);
    }
  }
}
export default new freleancersServices();

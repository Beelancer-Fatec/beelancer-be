import Freelancers from "../Models/FreelancerModel.js";

class freleancersServices {
  //LISTAR TODOS OS FREELANCERS
  async getAll() {
    try {
      const freelancers = await Freelancers.find();
      return freelancers;
    } catch (error) {
      console.log(`Erro ao encontrar o freelancer\n`, error);
    }
  }

  //LISTAR TODOS OS FREELANCERS COM DETALHES DE USERS
  async getAllWithUserDetails() {
    try {
      const freelancers = await Freelancers.find()
        .populate("user_id", "-password")
        .lean();

      // Renomeia 'user_id' para 'user' em cada freelancer
      const updatedFreelancers = freelancers.map((freelancer) => {
        freelancer.user = freelancer.user_id;
        delete freelancer.user_id; // Remove o campo 'user_id'
        return freelancer;
      });

      return updatedFreelancers;
    } catch (error) {
      console.log(`Erro ao encontrar o freelancer\n`, error);
    }
  }

  //BUSCAR FREELANCER PELO ID
  async getOne(id) {
    try {
      const freelancer = await Freelancers.findById(id);
      return freelancer;
    } catch (error) {
      console.log(`Erro ao encontrar o freelancer de ID:${id}\n`, error);
    }
  }

  //BUSCAR FREELANCER PELO ID COM DETALHES DE USER
  async getOneWithUserDetails(id) {
    try {
      const freelancer = await Freelancers.findById(id)
        .populate("user_id", "-password")
        .lean();
      freelancer.user = freelancer.user_id;
      delete freelancer.user_id;
      return freelancer;
    } catch (error) {
      console.log(`Erro ao encontrar o freelancer de ID:${id}\n`, error);
    }
  }
  //CADASTRAR FREELANCER
  async cadFreela(especialidades, classificacao, user_id, endereco) {
    try {
      const newFreelas = new Freelancers({
        especialidades,
        classificacao,
        user_id,
        endereco,
      });
      await newFreelas.save();
    } catch (error) {
      console.log("Erro ao cadastrar Freelancers", error);
    }
  }

  //DELETANDO UM CLIENTE
  async delFreela(id) {
    try {
      await Freelancers.findByIdAndDelete(id);
      console.log(`Freelancer com o id ${id} foi deletado`);
    } catch (error) {
      console.log(`Erro ao deletar o freelancer de ID:${id}\n`, error);
    }
  }

  //ALTERANDO UM CLIENTE
  async updFreela(id, especialidades, enderecos, classificacao) {
    try {
      await Freelancers.findByIdAndUpdate(
        id,
        especialidades,
        enderecos,
        classificacao
      );
    } catch (error) {
      console.log(`Erro ao atualizar o freelancer de ID:${id}\n`, error);
    }
  }

  async getFreelancersByEspecialidade(pesquisa) {
    try {
      const Freelancer = await Freelancers.find({
        especialidades: { $in: [pesquisa] },
      });
      return Freelancer;
    } catch (erro) {
      console.log("Erro ao buscar freelancers por especialidade:", erro);
    }
  }
}
export default new freleancersServices();

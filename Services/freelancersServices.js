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

  async getOne(id){
    try{
      const freelancer = await Freelancers.findById(id)
      return freelancer
    }catch(error){
      console.log(error)
    }
  }
  //CADASTRAR FREELANCER
  async cadFreela(especialidades,enderecos,classificacao,user_id) {
    try {
      const newFreelas = new Freelancers({
        especialidades,
        enderecos,
        classificacao,
        user_id
        
      
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
  async updFreela(id, especialidades,enderecos, classificacao) {
    try {
      await Freelancers.findByIdAndUpdate(
        id,
        especialidades,
        enderecos,
        classificacao
      );
    } catch (error) {
      console.log(error);
    }
  }
}
export default new freleancersServices();

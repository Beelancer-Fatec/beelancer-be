import Clients from "../Models/ClientModel.js";

class clientsServices {
  //LISTAR TODOS OS CLIENTES
  async getAll() {
    try {
      const clients = await Clients.find();
      return clients;
    } catch (error) {
      console.log(error);
    }
  }

  //LISTAR TODOS OS CLIENTES COM DETALHES DE USERS
  async getAllWithUserDetails() {
    try {
      const clients = await Clients.find()
        .populate("user_id", "-password")
        .lean();

      const clientsFormated = clients.map((freelancer) => {
        freelancer.user = freelancer.user_id;
        freelancer.user.password = undefined;
        delete freelancer.user_id;

        return freelancer;
      });

      return clientsFormated;
    } catch (error) {
      console.log(error);
    }
  }

  //CADASTRAR CLIENTE
  async cadClient(endereco, classificacao, user_id) {
    try {
      const newClient = new Clients({
        endereco,
        classificacao,
        user_id,
      });
      await newClient.save();
    } catch (error) {
      console.log(error);
    }
  }

  //DELETANDO UM CLIENTE
  async delClient(id) {
    try {
      await Clients.findByIdAndDelete(id);
      console.log(`Cliente com o id ${id} foi deletado`);
    } catch (error) {
      console.log(error);
    }
  }

  //ALTERANDO UM CLIENTE
  async updClient(id, enderecos, classificacao) {
    try {
      await Clients.findByIdAndUpdate(id, {
        enderecos,
        contatos,
        classificacao,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //PEGANDO UM UNICO CLIENT
  async getOne(id) {
    try {
      const cliente = await Clients.findById(id);
      return cliente;
    } catch (error) {
      console.log(error);
    }
  }

  //PEGANDO UM UNICO CLIENT COM DETALHES DE USER
  async getOneWithUserDetails(id) {
    try {
      const cliente = await Clients.findById(id)
        .populate("user_id", "-password")
        .lean();

      cliente.user = cliente.user_id;
      cliente.user.password = undefined;
      delete cliente.user_id;

      return cliente;
    } catch (error) {
      console.log(error);
    }
  }
  async addEndereco(id,newEndereco){
    try{
      const cliente = await Clients.findByIdAndUpdate(id,{ $push: { enderecos: newEndereco } },
        { new: true })
    return cliente;
        
    }catch(error){
      console.log(error)
    }
  }
}
export default new clientsServices();

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

  //CADASTRAR CLIENTE
  async cadClient(enderecos, classificacao, user_id) {
    try {
      const newClient = new Clients({
        enderecos,
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
}
export default new clientsServices();

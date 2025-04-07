
import Clients from "../Models/Clients.js";

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
  async cadClient(enderecos, contatos, classificacao) {
    try {
      const newClient = new Clients({
        enderecos,
        contatos,
        classificacao,
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
  async updClient(id, enderecos, contatos, classificacao) {
    try {
      await Clients.findByIdAndUpdate(id,{ enderecos, contatos, classificacao});
    } catch (error) {
      console.log(error);
    }
  }
}
export default new clientsServices();

import Users from "../Models/Users.js";

class UsersServices {
  //LISTAR TODOS OS USUARIOS
  async getAll() {
    try {
      const users = await Users.find();
      return users;
    } catch (error) {
      console.log(error);
    }
  }

  //CADASTRAR USUARIOS
  async cadUser(nome, email, password) {
    try {
      const newUser = new Users({
        nome,
        email,
        password,
      });
      await newUser.save();
    } catch (error) {
      console.log(error);
    }
  }

  //DELETANDO UM USUARIO
  async delUser(id) {
    try {
      await Users.findByIdAndDelete(id);
      console.log(`Usuario com o id ${id} foi deletado`);
    } catch (error) {
      console.log(error);
    }
  }

  //ALTERANDO UM USUARIO
  async updUser(id, nome, email, password) {
    try {
      await Users.findByIdAndUpdate(id, nome, email, password);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new UsersServices();

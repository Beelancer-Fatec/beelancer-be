import Users from "../Models/UserModel.js";

class UsersServices {
  //BUSCAR USUARIO PELO ID
  async getById(id) {
    try {
      const users = await Users.findById(id);
      return users;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

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
  async cadUser(nome, email, password, image_URL) {
    try {
      const newUser = new Users({
        nome,
        email,
        password,
        image_URL,
      });
      await newUser.save();
      return newUser;
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
  async updUser(id, nome, email, password, image_URL) {
    try {
      const updatedUser = await Users.findByIdAndUpdate(id, {
        nome: nome,
        email: email,
        password: password,
        image_URL: image_URL,
      });
      return updatedUser;
    } catch (error) {
      console.log(error);
    }
  }
}
export default new UsersServices();

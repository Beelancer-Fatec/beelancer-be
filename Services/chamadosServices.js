import Chamados from "../Models/ChamadoModel.js";

class chamadosServices {
  async cadChamados(
    client_id,
    freelancer_id,
    titulo,
    descricao,
    data_realizacao,
    tipo_servico,
    valor_a_pagar,
    data_criacao,
    data_edicao,
    status,
    status_servico,
    endereco
  ) {
    try {
      const NewChamado = new Chamados({
        client_id,
        freelancer_id,
        titulo,
        descricao,
        data_realizacao: data_realizacao ?? null,
        tipo_servico,
        valor_a_pagar: valor_a_pagar ?? null,
        data_criacao,
        data_edicao,
        status,
        status_servico,
        endereco,
      });
      await NewChamado.save();
    } catch (error) {
      console.log(error);
    }
  }
  //LISTANDO TODOS
  async GetAll() {
    try {
      const chamados = await Chamados.find();
      return chamados;
    } catch (error) {
      console.log(error);
    }
  }
  //LISTAR UM
  async GetOne(id) {
    try {
      const chamado = await Chamados.findById(id);
      return chamado;
    } catch (error) {
      console.log(error);
    }
  }
  //DELETAR
  async delChamado(id) {
    try {
      await Chamados.findByIdAndDelete(id);
      console.log(`Chamado com o id ${id} foi deletado`);
    } catch (error) {
      console.log(error);
    }
  }
  //ATUALIZAR
  async updtChamado(
    id,
    client_id,
    freelancer_id,
    titulo,
    descricao,
    data_realizacao,
    tipo_servico,
    valor_a_pagar,
    data_criacao,
    data_edicao,
    status,
    endereco
  ) {
    try {
      await Chamados.findByIdAndUpdate(id, {
        client_id,
        freelancer_id,
        titulo,
        descricao,
        data_realizacao,
        tipo_servico,
        valor_a_pagar,
        data_criacao,
        data_edicao,
        status,
        endereco,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
export default new chamadosServices();

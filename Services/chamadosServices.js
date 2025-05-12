import Chamados from "../Models/ChamadoModel.js";
import mongoose from "mongoose";
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
        freelancer_id: freelancer_id ?? null,
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
      const chamados = await Chamados.find()
        .populate({
          path: ["client_id", "freelancer_id"],
          populate: { path: "user_id" },
        })
        .lean();

      const chamadosFormatted = chamados.map((chamado) => {
        // Renomeando as chaves no resultado
        return {
          ...chamado,
          client: {
            ...chamado.client_id,
            user: chamado.client_id?.user_id
              ? {
                  nome: chamado.client_id.user_id.nome,
                  email: chamado.client_id.user_id.email,
                  image_URL: chamado.client_id.user_id.image_URL,
                }
              : null,
            user_id: undefined,
          },
          freelancer: {
            ...chamado.freelancer_id,
            user: chamado.freelancer_id?.user_id
              ? {
                  nome: chamado.freelancer_id.user_id.nome,
                  email: chamado.freelancer_id.user_id.email,
                  image_URL: chamado.freelancer_id.user_id.image_URL,
                }
              : null,
            user_id: undefined,
          },
          freelancer_id: undefined,
          client_id: undefined,
          freelancer_id: undefined,
        };
      });
      return chamadosFormatted;
    } catch (error) {
      console.log(error);
    }
  }
  //LISTANDO TODOS ATIVOS
  async GetAllAtivo() {
    try {
      const chamados = await Chamados.find({ status: "ATIVO" })
        .populate({
          path: ["client_id", "freelancer_id"],
          populate: { path: "user_id" },
        })
        .lean();

      const chamadosFormatted = chamados.map((chamado) => {
        // Renomeando as chaves no resultado
        return {
          ...chamado,
          client: {
            ...chamado.client_id,
            user: chamado.client_id?.user_id
              ? {
                  nome: chamado.client_id.user_id.nome,
                  email: chamado.client_id.user_id.email,
                  image_URL: chamado.client_id.user_id.image_URL,
                }
              : null,
            user_id: undefined,
          },
          freelancer: {
            ...chamado.freelancer_id,
            user: chamado.freelancer_id?.user_id
              ? {
                  nome: chamado.freelancer_id.user_id.nome,
                  email: chamado.freelancer_id.user_id.email,
                  image_URL: chamado.freelancer_id.user_id.image_URL,
                }
              : null,
            user_id: undefined,
          },
          freelancer_id: undefined,
          client_id: undefined,
          freelancer_id: undefined,
        };
      });
      return chamadosFormatted;
    } catch (error) {
      console.log(error);
    }
  }
  //LISTAR UM
  async GetOne(id) {
    try {
      const chamado = await Chamados.findById(id)
        .populate({
          path: "client_id freelancer_id",
          populate: { path: "user_id" },
        })
        .lean();

      if (!chamado) {
        return;
      }

      // Transformando os dados para incluir 'client' e 'freelancer' com informações completas
      const chamadoFormatted = {
        ...chamado,
        client: {
          ...chamado.client_id,
          user: chamado.client_id?.user_id
            ? {
                nome: chamado.client_id.user_id.nome,
                email: chamado.client_id.user_id.email,
                image_URL: chamado.client_id.user_id.image_URL,
              }
            : null,
          user_id: undefined,
        },
        freelancer: {
          ...chamado.freelancer_id,
          user: chamado.freelancer_id?.user_id
            ? {
                nome: chamado.freelancer_id.user_id.nome,
                email: chamado.freelancer_id.user_id.email,
                image_URL: chamado.freelancer_id.user_id.image_URL,
              }
            : null,
          user_id: undefined,
        },
        client_id: undefined,
        freelancer_id: undefined,
      };

      return chamadoFormatted;
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
    status_servico,
    endereco
  ) {
    try {
      await Chamados.findByIdAndUpdate(id, {
        client_id:
          typeof client_id === "string"
            ? mongoose.isValidObjectId(client_id)
              ? new mongoose.Types.ObjectId(client_id)
              : null
            : client_id,
        freelancer_id:
          typeof freelancer_id === "string"
            ? mongoose.isValidObjectId(freelancer_id)
              ? new mongoose.Types.ObjectId(freelancer_id)
              : null
            : freelancer_id,
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
    } catch (error) {
      console.log(error);
    }
  }
}
export default new chamadosServices();

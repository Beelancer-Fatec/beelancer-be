import Interesses from "../Models/InteresseModel.js";
class InteressesServices {
  async cadastrarInteresse(freelancer_id, chamado_id, mensagem) {
    const novoInteresseModel = new Interesses({
      freelancer_id,
      chamado_id,
      mensagem,
    });

    await novoInteresseModel.save();
  }

  async getAll() {
    const interesses = await Interesses.find()
      .populate([
        { path: "freelancer_id", populate: "user_id" },
        { path: "chamado_id" },
      ])
      .lean();

    const interessesFormatted = interesses.map((i) => {
      return {
        ...i,
        freelancer: {
          ...i.freelancer_id,
          user: {
            ...i.freelancer_id?.user_id,
          },
          user_id: undefined,
        },
        chamado: {
          ...i.chamado_id,
        },
        chamado_id: undefined,
        freelancer_id: undefined,
      };
    });

    return interessesFormatted;
  }

  async getAllByChamadoID(chamado_id) {
    const interesses = await Interesses.find({ chamado_id: chamado_id })
      .populate([
        { path: "freelancer_id", populate: "user_id" },
        { path: "chamado_id" },
      ])
      .lean();

    const interessesFormatted = interesses.map((i) => {
      return {
        ...i,
        freelancer: {
          ...i.freelancer_id,
          user: {
            ...i.freelancer_id?.user_id,
          },
          user_id: undefined,
        },
        chamado: {
          ...i.chamado_id,
        },
        chamado_id: undefined,
        freelancer_id: undefined,
      };
    });

    return interessesFormatted;
  }
  
  async getAllByFreelancerID(freelancer_id) {
    const interesses = await Interesses.find({ freelancer_id: freelancer_id })
      .populate([
        { path: "freelancer_id", populate: "user_id" },
        { path: "chamado_id" },
      ])
      .lean();

    const interessesFormatted = interesses.map((i) => {
      return {
        ...i,
        freelancer: {
          ...i.freelancer_id,
          user: {
            ...i.freelancer_id?.user_id,
          },
          user_id: undefined,
        },
        chamado: {
          ...i.chamado_id,
        },
        chamado_id: undefined,
        freelancer_id: undefined,
      };
    });

    return interessesFormatted;
  }
  
  async deleteInteresse(id) {
    
    await Interesses.findByIdAndDelete(id);
    
  }
}
export default new InteressesServices();

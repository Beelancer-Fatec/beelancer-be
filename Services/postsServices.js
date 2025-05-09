import Posts from "../Models/PostModel.js";

export default class PostsServices {
  async findAll() {
    try {
      const posts = await Posts.find();
      return posts;
    } catch (error) {
      console.log(error);
    }
  }
  async cadPost
  (
    freelancer_id,
    imagens,
    titulo,
    descricao,
    qtd_like,
    data_criacao,
    data_atualizacao
  ) 
    {
      try {
        const NewPost = new Posts({
          freelancer_id,
          imagens,
          titulo,
          descricao,
          qtd_like,
          data_criacao,
          data_atualizacao,
        });
        await NewPost.save();
    } catch (error) {
      console.log(error);
    }
  }
}

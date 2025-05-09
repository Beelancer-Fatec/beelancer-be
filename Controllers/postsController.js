import { ObjectId } from "mongodb";
import PostsServices from "../Services/postsServices.js";
const getAllPosts = async (req, res) => {
  try {
    const posts = PostsServices.findAll();
    return res.status(200).json({ posts: posts });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const createPost = async (req, res) => {
  try {
    const {
      freelancer_id,
      imagens,
      titulo,
      descricao,
      qtd_like,
      data_criacao,
      data_atualizacao,
    } = req.body;
    const posts = PostsServices.cadPost( 
      freelancer_id,
      imagens,
      titulo,
      descricao,
      qtd_like,
      data_criacao,
      data_atualizacao,)
    return res.status(200).json({ posts: posts });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default { getAllPosts, createPost };

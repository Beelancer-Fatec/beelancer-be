import { ObjectId } from "mongodb";

const getAllPosts = async (req, res) => {
  try {
    const posts = postService.findAll();
    return res.status(200).json({ posts: posts });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const createPost = async (req, res) => {
  try {
    const {
      imagens,
      titulo,
      descricao,
      qtd_like,
      data_criacao,
      data_atualizacao,
    } = req.body;
    const posts = postService.findAll();
    return res.status(200).json({ posts: posts });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default { getAllPosts, createPost };

import { ObjectId } from "mongodb";
import PostsServices from "../Services/postsServices.js";
const getAllPosts = async (req, res) => {
  try {
    const posts = await PostsServices.findAll();
    return res.status(200).json({ posts: posts });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getOnePostById = async (req, res) => {
  const postId = req.params.id;

  try {
    if (ObjectId.isValid(postId)) {
      const post = await PostsServices.getOnePostById(postId);

      if (!post) {
        return res.sendStatus(404);
      }

      return res.status(200).json({ post: post });
    } else {
      return res.status(400).json({ error: "Informe um id válido" });
    }
  } catch (err) {
    console.log(`Erro ao buscar post com ID ${postId}`, err);
    res.sendStatus(500);
  }
};

const getAllPostsOfFreelancerByFreelancerId = async (req, res) => {
  const freelancer_id = req.params.freelancer_id;

  try {
    if (ObjectId.isValid(freelancer_id)) {
      const posts = await PostsServices.getAllPostsOfFreelancerByFreelancerId(
        freelancer_id
      );

      return res.status(200).json({ posts: posts });
    } else {
      return res.status(400).json({ error: "Informe um id válido" });
    }
  } catch (err) {
    console.log(`Erro ao buscar post com ID ${freelancer_id}`, err);
    res.sendStatus(500);
  }
};

const createPost = async (req, res) => {
  try {
    const { freelancer_id, imagens, titulo, descricao, qtd_like } = req.body;
    const createdPost = await PostsServices.cadPost(
      freelancer_id,
      imagens,
      titulo,
      descricao,
      qtd_like
    );
    return res.status(201).json({ createdPost: createdPost });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const deletePostById = async (req, res) => {
  const postId = req.params.id;
  try {
    if (ObjectId.isValid(postId)) {
      await PostsServices.deletePostById(postId);
    } else {
      return res.status(400).json({ error: "Informe um id válido" });
    }

    return res.sendStatus(204);
  } catch (err) {
    console.log(`Erro ao deletar post com id ${postId}`, err);
    res.sendStatus(500);
  }
};

export default {
  getAllPosts,
  getOnePostById,
  getAllPostsOfFreelancerByFreelancerId,
  createPost,
  deletePostById,
};

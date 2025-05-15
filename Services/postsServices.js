import Posts from "../Models/PostModel.js";

class PostsServices {
  async findAll() {
    const posts = await Posts.find()
      .populate({
        path: "freelancer_id",
        populate: { path: "user_id" },
      })
      .lean();

    const postsFormatted = posts.map((p) => {
      return {
        ...p,
        freelancer: p.freelancer_id
          ? {
              ...p.freelancer_id,
              user: p.freelancer_id.user_id
                ? { ...p.freelancer_id.user_id, password: undefined }
                : null,
              user_id: undefined,
            }
          : null,
        freelancer_id: undefined,
      };
    });
    return postsFormatted;
  }

  async getOnePostById(postId) {
    const post = await Posts.findById(postId)
      .populate({
        path: "freelancer_id",
        populate: { path: "user_id" },
      })
      .lean();

    if (!post) {
      return;
    }

    console.log(post);
    post.freelancer_id.user = post.freelancer_id.user_id;
    post.freelancer_id.user.password = undefined;
    delete post.freelancer_id.user_id;

    post.freelancer = post.freelancer_id;
    delete post.freelancer_id;
    console.log(post);

    return post;
  }

  async getAllPostsOfFreelancerByFreelancerId(freelancer_id) {
    const posts = await Posts.find({ freelancer_id: freelancer_id })
      .populate({
        path: "freelancer_id",
        populate: { path: "user_id" },
      })
      .lean();

    const postsFormatted = posts.map((p) => {
      const freelancer = { ...p.freelancer_id };

      if (freelancer.user_id && typeof freelancer.user_id === "object") {
        freelancer.user = freelancer.user_id;
      } else {
        // fallback: evita erro se user_id não foi populado
        freelancer.user = null;
      }

      delete freelancer.user_id;

      p.freelancer = freelancer;
      delete p.freelancer_id;

      return p;
    });

    return postsFormatted;
  }

  async cadPost(freelancer_id, imagens, titulo, descricao, qtd_like) {
    const NewPost = new Posts({
      freelancer_id,
      imagens,
      titulo,
      descricao,
      qtd_like,
    });
    const createdPost = await NewPost.save();
    return createdPost;
  }

  async deletePostById(postId) {
    await Posts.findByIdAndDelete(postId);
  }
}

export default new PostsServices();

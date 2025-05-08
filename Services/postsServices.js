import Posts from "../Models/PostModel";

export default class PostsServices {
  async findAll() {
    const posts = await Posts.find();
    return posts;
  }
}

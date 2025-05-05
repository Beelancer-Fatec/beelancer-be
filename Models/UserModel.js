import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nome: String,
  email: String,
  password: String,
});

const Users = mongoose.model("user", userSchema);
export default Users;

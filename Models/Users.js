import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nome: String,
  email: String,
  password: String,
  teste: String
});

const Users = mongoose.model("User", userSchema);

export default Users;

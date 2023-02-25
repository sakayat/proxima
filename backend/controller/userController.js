const userModal = require("../models/userModal");
const User = require("../models/userModal");

// login user
const loginUser = (req, res) => {
  res.json({ message: "login" });
};

// signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.signup(email,password);
  res.status(200).json(user);
};

// users
const getUsers = (req, res) => {
  res.json({ message: "users" });
};

module.exports = {
  loginUser,
  signupUser,
  getUsers,
};

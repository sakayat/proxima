// login user
const loginUser = (req, res) => {
  res.json({ message: "login" });
};

// signup user
const signupUser = (req, res) => {
  res.json({ message: "signup" });
};

// users

const getUsers = (req,res) => {
  res.json({message : "users"})
}

module.exports = {
  loginUser,
  signupUser,
  getUsers
};

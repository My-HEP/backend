const registerUser = (req, res) => {
  console.log(req.body.uid);
  const uid = req.body.uid;
  const email = req.body.email;
  
  res.send('Register route');
};

const loginUser = (req, res) => {
  console.log(req.body);
  res.send('Login route');
};

module.exports = {
  registerUser,
  loginUser,
};

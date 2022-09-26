const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const registerUser = async (req, res) => {
  const { email, firstName, lastName, phoneNumber, uid } = req.body;
  const phone = parseInt(phoneNumber.replace(/-/g, ''));
  try {
    const user = await database.User.create({
      data: {
        email,
        firstName,
        lastName,
        phone,
        uid,
      },
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
};

const loginUser = (req, res) => {
  console.log(req.body);
  res.send('Login route');
};

module.exports = {
  registerUser,
  loginUser,
};

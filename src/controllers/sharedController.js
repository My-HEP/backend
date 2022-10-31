const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const createUserAccount = async (req, res) => {
  const { email, firstName, lastName, phoneNumber, uid, role } = req.body;
  const phone = parseInt(phoneNumber.replace(/-/g, ''));
  try {
    const user = await database.User.create({
      data: {
        email,
        firstName,
        lastName,
        phone,
        uid, 
        role
      }
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
};

const returnUserData = async (req, res) => {
  const uid = req.body.uid;
  try {
    const userData = await database.user.findFirst({ where: { uid: uid } });
    res.json(userData);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUserAccount,
  returnUserData,
};

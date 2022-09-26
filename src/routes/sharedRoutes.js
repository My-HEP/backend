const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/sharedController');
const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

router.post('/', registerUser);
router.post('/login', loginUser);

router.post('/user', async (req, res) => {
  const uid = req.body;
  console.log(uid);
  // const userData = await database.user.findUnique({ where: { uid: uid } });
  // console.log(userData);

  res.send(uid);
});

module.exports = router;

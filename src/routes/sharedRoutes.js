const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const {
  createUserAccount,
  returnUserData,
} = require('../controllers/sharedController');

router.post('/createUserAccount', createUserAccount);
router.post('/user', returnUserData);


module.exports = router;

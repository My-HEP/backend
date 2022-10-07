const express = require('express');
const router = express.Router();
const {
  createUserAccount,
  loginUser,
  returnUserData,
} = require('../controllers/sharedController');

router.post('/createUserAccount', createUserAccount);
router.post('/user', returnUserData);

module.exports = router;

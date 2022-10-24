const express = require('express');
const router = express.Router();

const {
  createUserAccount,
  returnUserData,
} = require('../controllers/sharedController');

router.post('/createUserAccount', createUserAccount);
router.post('/user', returnUserData);

module.exports = router;

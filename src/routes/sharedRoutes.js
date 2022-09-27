const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  returnUserData,
} = require('../controllers/sharedController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/user', returnUserData);

module.exports = router;

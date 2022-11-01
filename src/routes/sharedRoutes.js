const express = require('express');
const router = express.Router();

const {
  createUserAccount,
  returnUserData,
  updateUserData,
} = require('../controllers/sharedController');

router.post('/createUserAccount', createUserAccount);
router.post('/user', returnUserData);
router.put('/updateUser', updateUserData);

module.exports = router;

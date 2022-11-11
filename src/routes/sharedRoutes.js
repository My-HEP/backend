const express = require('express');
const router = express.Router();

const {
  createUserAccount,
  returnUserData,
  updateUserData,
} = require('../controllers/sharedController');

router.post('/createUserAccount', createUserAccount);
router.get('/user/:uid', returnUserData);
router.put('/updateUser', updateUserData);

module.exports = router;

const express = require('express');
const router = express.Router();

const {
  createUserAccount,
  returnUserData,
  updateUserData,
  updateSelfData,
} = require('../controllers/sharedController');

router.post('/createUserAccount', createUserAccount);
router.get('/user/:uid', returnUserData);
router.put('/updateUser', updateUserData);
router.put('/updateInfo', updateSelfData);

module.exports = router;

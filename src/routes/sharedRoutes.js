const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/sharedController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/', (req, res) => {
  res.send('user get request');
});

module.exports = router;

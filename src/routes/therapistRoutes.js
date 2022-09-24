const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

// Select patient page of therapist view
router.get('/patients', async (req, res) => {
  const patients = await database.user.findMany({
    where: { role: 'PATIENT' },
  });
  console.log(patients);

  res.json(patients);
});

router.post('/patients', (req, res) => {
  res.send('therapist post request');
});

module.exports = router;

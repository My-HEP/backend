const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

// Select patient page of therapist view
router.get('/patients', async (req, res) => {
  const patients = await database.user.findMany({
    where: { role: 'PATIENT' },
  });

  res.json(patients);
});

// @todo create add patient route
router.post('/addPatient', (req, res) => {
  res.send('therapist post request');
});

// @todo create delete patient route
// can refactor code below

// router.delete('/deletePatient', async (req, res) => {
//   const deleted = await database.user.deleteMany({
//     where: { role: 'PATIENT' },
//   });
//   res.send(200);
// });

// @todo update patient route
router.put('/updatePatient', (req, res) => {
  res.send('update patient');
});

// @todo addHEPExercise
router.post('/addHEPExercise');

// @todo updateHEPExercise
router.put('/updateHEPExercise');

// @todo addExercise
router.post('/addExercise');

// @todo removeExercise
router.delete('/removeExercise');

module.exports = router;

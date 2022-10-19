const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

router.get('/homeStats', async (req, res) => {
  const patients = await database.user.findMany({
    where: { role: 'PATIENT' },
  });
  let patientsNum = patients.length
  res.json(patientsNum);
});

// Select patient page of therapist view
router.get('/patients', async (req, res) => {
  const patients = await database.user.findMany({
    where: { role: 'PATIENT' },
  });
  patientsNum = patients.length
  res.json(patients);
});

// @todo create add patient route - Kristen
// send email with temporary password - patient will then login
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

// @todo get patient route - Kayla 
router.get('/patient/:id', async (req, res) => {
   let id = parseInt(req.params.id)
   const patient = await database.user.findUnique({
    where: { id },
  });

  res.json(patient);
});

// @todo update patient route - Kayla or Kristen
router.put('/updatePatient', (req, res) => {
  res.send('update patient');
});

// @todo addHEPExercise - Kayla
router.post('/addHEPExercise', (req, res) => {
  res.send('update HEP');
});
// @todo updateHEPExercise - Kayla
router.put('/updateHEPExercise');

// @todo addExercise - Kristen
router.post('/addExercise');

// @todo removeExercise - Kristen
router.delete('/removeExercise');

module.exports = router;

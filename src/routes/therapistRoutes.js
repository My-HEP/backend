const express = require('express');
const router = express.Router();

const {
  addExercise,
  deleteExercise,
  getExercises,
  getPatient,
  addPatient,
  addHEPExercise,
  homeStats,
  deletePatient,
} = require('../controllers/therapistController');

const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

// Select patient page of therapist view
// @TODO refactor function into controller
router.get('/patients', async (req, res) => {
  const patients = await database.user.findMany({
    where: { role: 'PATIENT' },
  });

  res.json(patients);
});

// Home stats route
router.get('/homeStats', homeStats);

// add patient route
router.post('/addPatient', addPatient);

// get patient route
router.get('/patient/:id', getPatient);

// delete patient route
router.delete('/deletePatient', deletePatient);


// @ TODO update patient route - Kristen
router.put('/updatePatient', (req, res) => {
  res.send('update patient');
});

// @ TODO addHEPExercise - Kayla
router.post('/addHEPExercise', addHEPExercise);

// @ TODO updateHEPExercise - Kayla
router.put('/updateHEPExercise');

// Exercise Library View/Page
router.get('/exercises', getExercises);

// add new exercise to library route
router.post('/addExercise', addExercise);

// delete exercise from library route
router.delete('/deleteExercise', deleteExercise);

module.exports = router;

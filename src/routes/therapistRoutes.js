const express = require('express');
const router = express.Router();

const {
  addExercise,
  deleteExercise,
  getExercises,
  getPatient,
  addPatient,
  addHEPExercise,
  updateHEPExercise,
  getHEPExercises,
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

router.post('/addHEPExercise', addHEPExercise);

router.get('/getHEPExercises/:id', getHEPExercises);

// @ TODO updateHEPExercise - Kayla
router.put('/updateHEPExercise', updateHEPExercise);

// Exercise Library View/Page
router.get('/exercises', getExercises);

// add new exercise to library route
router.post('/addExercise', addExercise);

// delete exercise from library route
router.delete('/deleteExercise', deleteExercise);

module.exports = router;

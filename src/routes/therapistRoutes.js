const express = require('express');
const router = express.Router();

const {
  addExercise,
  deleteExercise,
  getExercises,
} = require('../controllers/therapistController');

const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

// Select patient page of therapist view
router.get('/patients', async (req, res) => {
  const patients = await database.user.findMany({
    where: { role: 'PATIENT' },
  });

  res.json(patients);
});

// @todo create add patient route - Kristen
// send email with temporary password - patient will then login
// We don't actually need this route because the functionality already lives in shared - create account
// router.post('/addPatient', createUserAccount);

// @todo create delete patient route
// can refactor code below

// router.delete('/deletePatient', async (req, res) => {
//   const deleted = await database.user.deleteMany({
//     where: { role: 'PATIENT' },
//   });
//   res.send(200);
// });

// @todo update patient route - Kayla or Kristen
router.put('/updatePatient', (req, res) => {
  res.send('update patient');
});

// @todo addHEPExercise - Kayla
router.post('/addHEPExercise');

// @todo updateHEPExercise - Kayla
router.put('/updateHEPExercise');

// Exercise Library View/Page
router.get('/exercises', getExercises);

router.post('/addExercise', addExercise);

router.delete('/deleteExercise', deleteExercise);

module.exports = router;

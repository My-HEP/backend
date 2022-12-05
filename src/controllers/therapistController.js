const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const { getAuth } = require('firebase-admin/auth');

// home stats for home page 
const homeStats = async (req, res) => {
  const patients = await database.user.findMany({
    where: { role: 'PATIENT' },
  });
  let patientsNum = patients.length;
  const exercises = await database.Exercise.findMany();
  let exercisesNum = exercises.length;
  res.json({patientsNum, exercisesNum});
};

// add exercise to exercise library
const addExercise = async (req, res) => {
  const { url, title, tags } = req.body;
  try {
    const response = await database.Exercise.create({
      data: {
        // id: id,
        // this was failing before I changed
        // the default on the  exercise schema to
        // uuid() instead of autoincrement()
        // was requiring an id to be sent in the
        // req.body
        url: url,
        title: title,
        tags: {
          connect: tags,
        },
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
};

// read exercises from exercise library
const getExercises = async (req, res) => {
  try {
    const exercises = await database.Exercise.findMany({
      include: {
        tags: {
          select: {
            title: true,
          },
        },
      },
    });
    res.json(exercises);
  } catch (error) {
    res.json({ message: 'Something went wrong. Try again later.' });
  }
};

// delete exercise from exercise library
const deleteExercise = async (req, res) => {
  // id must be sent as a string type
  const { id } = req.body;
  try {
    const deletedExercise = await database.Exercise.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json(deletedExercise);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
};

//add new patient
const addPatient = async (req, res) => {
  const { email, firstName, lastName, phoneNumber, password } = req.body;
  const phone = parseInt(phoneNumber.replace(/-/g, ''));

  const auth = getAuth();

  try {
    const user = await auth.createUser({
      email: email,
      password: password,
    });
    res.send(user);
  } catch (error) {
    const message = error.message;
    res.status(500).json({ error });
  }

  try {
    const user = await database.User.create({
      data: {
        email,
        firstName,
        lastName,
        phone,
      },
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
};

// delete patient
const deletePatient = async (req, res) => {
  const { uid } = req.body;
  const deleted = await database.user.delete({
    where: {
      uid: { uid },
    },
  });
  res.send(200);
};

// get patient
const getPatient = async (req, res) => {
  let id = parseInt(req.params.id)
  const patient = await database.user.findUnique({
   where: { id },
 });

 res.json(patient);
}

// Add HEP exercise 
const addHEPExercise = async (req, res) => {
  const { exerciseId, frequencyByDay, frequencyByWeek, duration, durationUnits, notes, patientId, assignedById } = req.body;
  try {
    const response = await database.HEPExercise.create({
      data: {
        exerciseId,
        frequencyByDay, 
        frequencyByWeek, 
        duration, 
        durationUnits, 
        notes, 
        patientId, 
        assignedById 
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
}

// Update HEP exercise 
const updateHEPExercise = async (req, res) => {
  const { exerciseId, frequencyByDay, frequencyByWeek, duration, durationUnits, notes, patientId, assignedById } = req.body;
  try {
    const updateHEP = await database.HEPExercise.update({
     where: {
      AssignmentId: {
          patientId,
          exerciseId
        },
     },
     data: {
      exerciseId,
      frequencyByDay, 
      frequencyByWeek, 
      duration, 
      durationUnits, 
      notes, 
      patientId, 
      assignedById 
     }
    });
    res.status(200).json(updateHEP);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
}

// Delete HEP exercise 
const deleteHEPExercise = async (req, res) => {
  const { patientId, exerciseId } = req.body;
  try {
     await database.HEPExercise.delete({
     where: {
      AssignmentId: {
          patientId,
          exerciseId
        },
     }
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
}

// Get HEP exercises assigned to a patient
const getHEPExercises = async (req, res) => {
  try {
    let patientId = parseInt(req.params.id)
    const HEPExercises = await database.HEPExercise.findMany({
      where: { patientId }, 
      include: {
        exercise: true,
      },
      });
    res.status(200).json(HEPExercises);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
}



module.exports = {
  homeStats,
  addExercise,
  deleteExercise,
  getExercises,
  addPatient,
  getPatient,
  addHEPExercise,
  getHEPExercises,
  updateHEPExercise,
  deleteHEPExercise,
  deletePatient,
};

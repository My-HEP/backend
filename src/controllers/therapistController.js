const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const { getAuth } = require('firebase-admin/auth');

// add exercise to exercise library
const addExercise = async (req, res) => {
  const { url, title, tags } = req.body;
  console.log(req.body);
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
    console.log(response);
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
    console.log(deletedExercise);
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
    console.log(message);
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

module.exports = {
  addExercise,
  deleteExercise,
  getExercises,
  addPatient,
  deletePatient,
};
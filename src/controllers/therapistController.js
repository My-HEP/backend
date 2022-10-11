const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

// add exercise to exercise library
const addExercise = async (req, res) => {
  const { url, title, tags } = req.body;
  console.log('hitting add exercise route');
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
    const exercises = await database.Exercise.findMany();
    res.json(exercises);
  } catch (error) {
    res.json({ message: 'something went wrong' });
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

module.exports = {
  addExercise,
  deleteExercise,
  getExercises,
};

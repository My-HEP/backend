const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const exerciseData =
  //   {
  //     id: 1,
  //     url: 'https://images.unsplash.com/photo-1604186838347-9faaf0b83be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2188&q=80',
  //     // tags: ['Upper extremity', 'Elbow', 'Tendonitis'],
  //     title: 'Ulnar nerve glides',
  //   },
  //   {
  //     id: 2,
  //     url: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2235&q=80',
  //     // tags: ['Upper extremity', 'Hand', 'AROM'],
  //     title: 'Tendon glides',
  //   },
  //   {
  //     id: 3,
  //     url: 'https://images.unsplash.com/photo-1583513702439-2e611c58e93d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
  //     // tags: ['Lower extremity', 'Knee', 'Strength'],
  //     title: 'Leg extensions',
  //   },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1583513702439-2e611c58e93d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    tags: {
      create: [
        { id: 3, title: 'Nerve injury' },
        { id: 4, title: 'Strengthening' },
      ],
      connect: [{ id: 2 }],
    },
    title: 'Ulnar nerve glides',
  };

// const tagData = {
//   id: 1,
//   title: 'Upper extremity',
// };

const main = async (data) => {
  const createExercise = await database.Exercise.create({
    data: data,
  });
};

main(exerciseData);

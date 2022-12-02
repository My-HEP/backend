const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const tagData = [
  { id: 1, title: 'Nerve injury' },
  { id: 2, title: 'Strengthening' },
  { id: 3, title: 'Upper extremity' },
  { id: 4, title: 'Lower extremity' },
  { id: 5, title: 'Knee' },
  { id: 6, title: 'AROM' },
  { id: 7, title: 'PROM' },
];

// const exerciseData =
//   {
//     id: '1jiouklkjio7891',
//     url: 'https://www.mcit.org/wp-content/uploads/2018/04/Tendon-Glide-Exercises.jpg',
//     tags: {
//       connect: [{ id: 1 }, { id: 3 }, { id: 6 }],
//     },
//     title: 'Tendon glides',
//   };
//   {
//     id: '1jiouklkjio7892',
//     url: 'https://i.pinimg.com/originals/25/cb/b4/25cbb4ad06b76168a91e9b968eb64f54.jpg',
//     tags: {
//       connect: [{ id: 3 }, { id: 6 }],
//     },
//     title: 'Digital joint blocking',
//   };

//   {
//     id: '1jiouklkjio7893',
//     url: 'https://lh3.googleusercontent.com/-Nyj16rHX8bI/X7HR0ZMBC4I/AAAAAAAAPoY/X40alK7G1xEQckV4aPebBVOTahdacOIHQCLcBGAsYHQ/image.png',
//     tags: {
//       connect: [{ id: 1 }, { id: 3 }],
//     },
//     title: 'Median nerve glides',
//   };
//   {
//     id: '1jiouklkjio7894',
//     url: 'https://i0.wp.com/rehabforbetterlife.com/wp-content/uploads/2017/04/Radial-Nerve-Glides.jpg?w=1237',
//     tags: {
//       connect: [{ id: 1 }, { id: 3 }],
//     },
//     title: 'Radial nerve glides',
//   };
//   {
//     id: '1jiouklkjio7895',
//     url: 'https://cdn.flintrehab.com/uploads/2016/04/therapy-putty-exercise-blue-1024x683.jpg',
//     tags: {
//       connect: [{ id: 2 }, { id: 3 }],
//     },
//     title: 'Intrinsic hand muscle strengthening, theraputty',
//   };
//   {
//     id: '1jiouklkjio7896',
//     url: 'http://4.bp.blogspot.com/-w-F_O9PRITA/U_1U1dPlafI/AAAAAAAAALU/zC0QMY_Avig/s1600/Wrist%2BRange%2Bof%2BMotion%2BExercises.jpg',
//     tags: {
//       connect: [{ id: 3 }, { id: 6 }, { id: 7 }],
//     },
//     title: 'Wrist ROM',
//   };
//   {
//     id: '1jiouklkjio7897',
//     url: 'https://i0.wp.com/rehabforbetterlife.com/wp-content/uploads/2017/04/Tennis-Elbow-phase-1.jpg?w=1600',
//     title: 'Tennis elbow protocol, phase 1',
//     tags: {
//       connect: [{ id: 2 }, { id: 3 }, { id: 6 }],
//     },
//   };
//   {
//     id: '1jiouklkjio7898',
//     url: 'https://i0.wp.com/rehabforbetterlife.com/wp-content/uploads/2017/04/Tennis-Elbow-phase-2-1.jpg?resize=1024%2C906',
//     title: 'Tennis elbow protocol, phase 2',
//     tags: {
//       connect: [{ id: 2 }, { id: 3 }, { id: 6 }],
//     },
//   };

const userData = [
  {
    uid: 'GNOnvBb1BRdmeu2Iu1llddgX4oY2',
    lastName: 'Arendale',
    firstName: 'Elsa',
    phone: 1234567890,
    email: 'frozen1@email.com',
  },
  {
    uid: 'OVWpNXZZeJOCsqOHjtYVeqjXvlA3',
    lastName: 'Skywalker',
    firstName: 'Luke',
    phone: 1234567890,
    email: 'lskywalker@email.com',
  },
  {
    uid: '3kz3Vlqs5obsE6NFR1Ois5jv16W2',
    lastName: 'Banner',
    firstName: 'Bruce',
    phone: 1234567890,
    email: 'hulk@marvel.com',
  },
  {
    uid: 'kguGcRtxongqCNjLVwQWZka3tZg2',
    lastName: 'Rogers',
    firstName: 'Steve',
    phone: 1234567890,
    email: 'captain@marvel.com',
  },
];

// const main = async (data) => {
//   await database.Tag.createMany({
//     data: data,
//   });
// };

// main(tagData);

// const main = async (data) => {
//   await database.User.createMany({
//    data: data,
//  });
// };

// main(userData);

const main = async (data) => {
  await database.Exercise.create({
    data: data,
  });
};

main(exerciseData);

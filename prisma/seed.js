const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();

const tagData = [
  { id: 1, title: 'Nerve injury' },
  { id: 2, title: 'Strengthening' },
  { id: 3, title: 'Upper extremity' },
  { id: 4, title: 'Lower extremity' },
  { id: 5, title: 'AROM' },
  { id: 6, title: 'PROM' },
];

// const exerciseData = {
//   id: '1jiouklkjio7891',
//   url: 'https://www.mcit.org/wp-content/uploads/2018/04/Tendon-Glide-Exercises.jpg',
//   tags: {
//     connect: [{ id: 1 }, { id: 3 }, { id: 6 }],
//   },
//   title: 'Tendon glides',
// };

// {
//   id: '1jiouklkjio7892',
//   url: 'https://i.pinimg.com/originals/25/cb/b4/25cbb4ad06b76168a91e9b968eb64f54.jpg',
//   tags: {
//     connect: [{ id: 3 }, { id: 6 }],
//   },
//   title: 'Digital joint blocking',
// };

//   {
//   id: '1jiouklkjio7893',
//   url: 'https://lh3.googleusercontent.com/-Nyj16rHX8bI/X7HR0ZMBC4I/AAAAAAAAPoY/X40alK7G1xEQckV4aPebBVOTahdacOIHQCLcBGAsYHQ/image.png',
//   tags: {
//     connect: [{ id: 1 }, { id: 3 }],
//   },
//   title: 'Median nerve glides',
// };

//   {
//   id: '1jiouklkjio7894',
//   url: 'https://i0.wp.com/rehabforbetterlife.com/wp-content/uploads/2017/04/Radial-Nerve-Glides.jpg?w=1237',
//   tags: {
//     connect: [{ id: 1 }, { id: 3 }],
//   },
//   title: 'Radial nerve glides',
// };

//   {
//   id: '1jiouklkjio7895',
//   url: 'https://cdn.flintrehab.com/uploads/2016/04/therapy-putty-exercise-blue-1024x683.jpg',
//   tags: {
//     connect: [{ id: 2 }, { id: 3 }],
//   },
//   title: 'Intrinsic hand muscle strengthening, theraputty',
// };

//   {
//   id: '1jiouklkjio7896',
//   url: 'http://4.bp.blogspot.com/-w-F_O9PRITA/U_1U1dPlafI/AAAAAAAAALU/zC0QMY_Avig/s1600/Wrist%2BRange%2Bof%2BMotion%2BExercises.jpg',
//   tags: {
//     connect: [{ id: 3 }, { id: 5 }, { id: 6 }],
//   },
//   title: 'Wrist ROM',
// };

//   {
//   id: '1jiouklkjio7897',
//   url: 'https://i0.wp.com/rehabforbetterlife.com/wp-content/uploads/2017/04/Tennis-Elbow-phase-1.jpg?w=1600',
//   title: 'Tennis elbow protocol, phase 1',
//   tags: {
//     connect: [{ id: 2 }, { id: 3 }, { id: 6 }],
//   },
// };

//   {
//   id: '1jiouklkjio7898',
//   url: 'https://i0.wp.com/rehabforbetterlife.com/wp-content/uploads/2017/04/Tennis-Elbow-phase-2-1.jpg?resize=1024%2C906',
//   title: 'Tennis elbow protocol, phase 2',
//   tags: {
//     connect: [{ id: 2 }, { id: 3 }, { id: 6 }],
//   },
// };

const userData = [
  {
    uid: 'GNOnvBb1BRdmeu2Iu1llddgX4oY2',
    lastName: 'Arendale',
    firstName: 'Elsa',
    phone: 1234567890,
    email: 'frozen1@email.com',
    role: 'PATIENT',
  },
  {
    uid: 'OVWpNXZZeJOCsqOHjtYVeqjXvlA3',
    lastName: 'Skywalker',
    firstName: 'Luke',
    phone: 1234567890,
    email: 'lskywalker@email.com',
    role: 'PATIENT',
  },
  {
    uid: '3kz3Vlqs5obsE6NFR1Ois5jv16W2',
    lastName: 'Banner',
    firstName: 'Bruce',
    phone: 1234567890,
    email: 'hulk@marvel.com',
    role: 'PATIENT',
  },
  {
    uid: 'kguGcRtxongqCNjLVwQWZka3tZg2',
    lastName: 'Rogers',
    firstName: 'Steve',
    phone: 1234567890,
    email: 'captain@marvel.com',
    role: 'PATIENT',
  },
  {
    uid: 'o7EwpwYruOMe8FIUwlS8kYdkj2I3',
    lastName: 'Aardvark',
    firstName: 'Adam',
    phone: 1234567890,
    email: 'adam@email.com',
    role: 'PATIENT',
    avatar:
      'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    uid: 'S3e6sQ4uf2Wsh43pIoyHxraSK9H3',
    lastName: 'Bailey',
    firstName: 'Bertram',
    phone: 1234567890,
    email: 'bertram@email.com',
    role: 'THERAPIST',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    uid: 'sGwhunwxpqTmpMjxq38ylKDHwFx2',
    lastName: 'Combs',
    firstName: 'Catherine',
    phone: 1234567890,
    email: 'cath@email.com',
    role: 'THERAPIST',
    avatar:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    uid: 'FwrasH75SGTu6usEcb5ZUrMy2Rr2',
    lastName: 'Dillinger',
    firstName: 'Dylan',
    phone: 1234567890,
    email: 'dylpickle@email.com',
    role: 'PATIENT',
    avatar:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    uid: 'PMIPdTWmfobgBj6G7DaaVbEveFa2',
    lastName: 'Ellis',
    firstName: 'Elizabeth',
    phone: 1234567890,
    email: 'elizardbeth@email.com',
    role: 'PATIENT',
    avatar:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    uid: 'upTaFjm7srQrPW9IhKWWKCDtrMp1',
    lastName: 'Henderson',
    firstName: 'Harry',
    phone: 1234567890,
    email: 'harry@email.com',
    role: 'PATIENT',
  },
];

const main = async (data) => {
  await database.Tag.createMany({
    data: data,
  });
};

main(tagData);

// const main = async (data) => {
//   await database.User.createMany({
//     data: data,
//   });
// };

// main(userData);

// const main = async (data) => {
//   await database.Exercise.create({
//     data: data,
//   });
// };

// main(exerciseData);

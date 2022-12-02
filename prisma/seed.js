const { PrismaClient } = require('@prisma/client');
const database = new PrismaClient();


const tagData = [
  { id: 1, title: 'Nerve injury' },
  { id: 2, title: 'Strengthening' },
  { id: 3, title: 'Upper extremity'},
  { id: 4, title: 'Lower extremity' },
  { id: 5, title: 'Knee' },
]


// const exerciseData = 

  // {
  //   id: '1jiouklkjio7891',
  //   url: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  //   tags: {
  //     connect: [
  //       { id: 1 },
  //       { id: 2 },
  //       { id: 3 }
  //     ],
  //   },
  //   title: 'Tendon glides',
  // }
    // {
    //   id: '1jiouklkjio7892',
    //   url: 'https://images.unsplash.com/photo-1575558418313-edfa02db4206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
    //   tags: {
    //     connect: [
    //       { id: 4 },
    //       { id: 5 },
    //     ]
    //   },
    //   title: 'Leg extensions',
    // }

    // {
    //   id: '1jiouklkjio7893',
    //   url: 'https://images.unsplash.com/photo-1583513702439-2e611c58e93d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    //   tags: {
    //     connect: [{ id: 3 }],
    //   },
    //   title: 'Weighted wrist extension',
    // }
    // {
    //   id: '1jiouklkjio7894',
    //   url: 'https://images.unsplash.com/photo-1513738781020-f0109e72554f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    //   tags: {
    //     connect: [{ id: 4 }],
    //   },
    //   title: 'Median nerve glides',
    // }
    // {
    //   id: '1jiouklkjio7895',
    //   url: 'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    //   tags: {
    //     connect: [{ id: 3 }, { id: 1 }],
    //     },
    //   title: 'Tricep extension',
    // }
    // {
    //   id: '1jiouklkjio7896',
    //   url: ' https://images.unsplash.com/photo-1665897530919-37c1ccbdc056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    //   tags: {
    //   connect: [{ id: 1 }, { id: 2 }],
    //   },
    //   title: 'Wrist flexion',
    // }
  //   {
  //  id: '1jiouklkjio7897',
  //   url: 'https://images.unsplash.com/photo-1583513702439-2e611c58e93d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
  //   title: 'Ulnar nerve glides',
  //   tags: {
  //     connect: [
  //       { id: 3 },
  //       { id: 4 },
  //     ]
  //   },
  // }

// const userData = [
  // {
  //   uid: 'GNOnvBb1BRdmeu2Iu1llddgX4oY2',
  //   lastName: 'Arendale',
  //   firstName: 'Elsa',
  //   phone: 1234567890,
  //   email: 'frozen1@email.com',
  // }, 
  // {
  //   uid: 'OVWpNXZZeJOCsqOHjtYVeqjXvlA3',
  //   lastName: 'Skywalker',
  //   firstName: 'Luke',
  //   phone: 1234567890,
  //   email: 'lskywalker@email.com',
  // }, 
//   {
//     uid: '3kz3Vlqs5obsE6NFR1Ois5jv16W2',
//     lastName: 'Banner',
//     firstName: 'Bruce',
//     phone: 1234567890,
//     email: 'hulk@marvel.com',
//   },
//   {
//     uid: 'kguGcRtxongqCNjLVwQWZka3tZg2',
//     lastName: 'Rogers',
//     firstName: 'Steve',
//     phone: 1234567890,
//     email: 'captain@marvel.com',
//   },
// ]



// const main = async (data) => {
//    await database.Tag.createMany({
//     data: data,
//   });
// };

// main(tagData);

const main = async (data) => {
  await database.User.createMany({
   data: data,
 });
};

main(userData);

// const main = async (data) => {
//   await database.Exercise.create({
//    data: data,
//  });
// };

// main(exerciseData);

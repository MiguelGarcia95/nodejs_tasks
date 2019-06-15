// // CRUD

// const mongodb = require('mongodb');
// const {MongoClient, ObjectID} = mongodb;

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
//   if (error) {
//     return console.log('Unable to connect to database');
//   };

//   const db = client.db(databaseName);
//   // db.collection('users').insertOne({
//   //   name: 'Miguel',
//   //   age: 23,
//   // }, (error, result) => {
//   //   if (error) {
//   //     return console.log('Unable to insert user.');
//   //   }
//   //   console.log(result.ops)
//   // })

//   // db.collection('tasks').insertMany([
//   //   {
//   //     user: 'Othinus',
//   //     description: 'Create Gungnir',
//   //     completed: true
//   //   },
//   //   {
//   //     user: 'Touma',
//   //     description: 'Get a girlfriend',
//   //     completed: false
//   //   },
//   //   {
//   //     user: 'Misaki',
//   //     description: 'Make prince fall in love with me',
//   //     completed: false
//   //   },
//   // ], (error, result) => {
//   //   if (error) {
//   //     return console.log('Unable to insert tasks');
//   //   }

//   //   console.log(result.ops);
//   // });

//   // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
//   //   if (error) {
//   //     return console.log(error);
//   //   }

//   //   console.log(tasks);
//   // })

//   // db.collection('tasks').findOne({ _id: new
//   //   ObjectID("5d03ff39d1dc1c24dc1a2220") }, (error, task) => {
//   //   if (error) {
//   //     return console.log(error);
//   //   }

//   //   console.log(task)
//   // })

//   // db.collection('tasks').updateOne({user: 'Misaki'}, {$set: {completed: false}})
//   //   .then(result => {
//   //     console.log('result: ', result);
//   //   }).catch(error => {
//   //     console.log('error: ', error);
//   //   })

//   // db.collection('tasks').updateMany({completed: true}, {$set: {completed: false}})
//   //   .then(result => {
//   //     console.log(result.modifiedCount)
//   //   }).catch(error => {
//   //     console.log(error)
//   //   })

//   // db.collection('tasks').deleteOne({
//   //   description: 'Create Gungnir'
//   // }).then(result => {
//   //   console.log(result);
//   // }).catch(error => {
//   //   console.log(error);
//   // });

//   // db.collection('tasks').deleteMany({
//   //   completed: false
//   // }).then(result => {
//   //   console.log(result);
//   // }).catch(error => {
//   //   console.log(error);
//   // })

// })

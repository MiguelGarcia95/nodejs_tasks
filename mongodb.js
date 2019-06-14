// CRUD

const mongodb = require('mongodb');
const {MongoClient, ObjectID} = mongodb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  };

  const db = client.db(databaseName);
  // db.collection('users').insertOne({
  //   name: 'Miguel',
  //   age: 23,
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user.');
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen', 
  //     age: 29
  //   },
  //   {
  //     name: 'Othinus',
  //     age: 2000
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents');
  //   }

  //   console.log(result.ops);
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     user: 'Othinus',
  //     description: 'Create Gungnir',
  //     completed: true
  //   },
  //   {
  //     user: 'Touma',
  //     description: 'Get a girlfriend',
  //     completed: false
  //   },
  //   {
  //     user: 'Misaki',
  //     description: 'Make prince fall in love with me',
  //     completed: false
  //   },
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks');
  //   }

  //   console.log(result.ops);
  // });
})

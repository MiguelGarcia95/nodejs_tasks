const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
  }
});

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const newTask = new Task({
//   description: 'Sample Task',
//   completed: true
// })

// newTask.save()
//   .then(() => {
//     console.log(newTask);
//   }).catch((error) => {
//     console.log(error)
//   })

const me = new User({
  // name: 'Miguel',
  // age: 23,
});

me.save()
  .then(() => {
    console.log(me);
  }).catch(error => {
    console.log('Error: ', error);
  });
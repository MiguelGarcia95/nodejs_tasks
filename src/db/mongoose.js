const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid')
      }
    } 
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot be or contain password.');
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age can\'t be negative.');
      }
    }
  }
});


// const me = new User({
//   name: '   Miguel  ',
//   email: 'mig@garcia.com',
//   password: 'otp_nt10',
//   // age: 23,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   }).catch(error => {
//     console.log('Error: ', error);
//   });

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

const newTask = new Task({
  description: 'Sample Task    ',
  // completed: true
})

newTask.save()
  .then(() => {
    console.log(newTask);
  }).catch((error) => {
    console.log(error)
  })

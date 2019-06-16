const express = require('express');
const User = require('./models/User');
const Task = require('./models/Task');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    if (!user) {
      return res.status(404).send();
    }
    res.status(201).send(user);
  } catch (e) {
      res.status(500).send(e);    
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);    
  }
})

app.get('/users/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);    
  }
})

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (e) {
    res.status(500).send(e);    
  };
})

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).send(e);
  }
})

app.get('/tasks/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).send();
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
})

app.listen(port, () => {
  console.log('Server is up on port: ', port);
});
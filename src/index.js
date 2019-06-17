const express = require('express');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled.')
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site down for maintance, sorry for incovinience.');
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port: ', port);
});

// const Task  = require('./models/Task');
// const User = require('./models/User');
// const main = async () => {
//   // const task = await Task.findById('5d0778d1f53ec64fe06a856e');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById('5d07783db9cfa93cecd68fd6');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// }

// main();

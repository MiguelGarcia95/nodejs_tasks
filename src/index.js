const express = require('express');
// const User = require('./models/User');
// const Task = require('./models/Task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/user');
require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port: ', port);
});
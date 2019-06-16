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

app.use((req, res, next) => {
  res.status(503).send('Site down for maintance, sorry for incovinience.');
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port: ', port);
});

// const jwt = require('jsonwebtoken');

const myFunction = async () => {
  // const token = jwt.sign({ id: 'abc123' }, 'thisismynewsecretstring', {expiresIn: '7 days'});
  // console.log(token);

  // const data = jwt.verify(token, 'thisismynewsecretstring');
  // console.log(data)
}

// myFunction();
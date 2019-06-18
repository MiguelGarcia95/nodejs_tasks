const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/User');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  name: 'Mikhail',
  email: "mikhail@example.com",
  password: '540see!!!',
  tokens: [{
    token: jwt.sign({_id: userOneId}, process.env.JWT_SECRET)
  }]
};

const setUpDatabase = async() => {
  await User.deleteMany();
  await new User(userOne).save();
};

module.exports = {
  userOneId,
  userOne,
  setUpDatabase
}
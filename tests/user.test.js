const request = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const app = require('../src/app');
const User = require('../src/models/User');

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

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('should sign up a new user', async () => {
  const response = await request(app).post('/users').send({
    name: 'Miguel',
    email: "miguel@example.com",
    password: 'MyPass777'
  }).expect(201);

  //Assert that the database was changed correctly
  const user= await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  //Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      name: 'Miguel',
      email: "miguel@example.com"
    },
    token: user.tokens[0].token
  })

  expect(user.password).not.toBe('MyPass777');
});

test('Should login existing user', async () => {
  const response = await request(app).post('/users/login').send({
    email: "mikhail@example.com",
    password: '540see!!!'
  }).expect(200);

  const user = await User.findById(userOneId);

  expect(response.body.user.token).toBe(user.tokens[1].token);
})

test('Should not login nonexistant user', async () => {
  await request(app).post('/users/login').send({
    email: 'test@test.com',
    password: 'wribggsss'
  }).expect(400);
})

test('Should get profile for user', async () => {
  await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
});

test('Should not get profile for unauthenticated user', async () => {
  await request(app)
    .get('/users/me')
    .send()
    .expect(401)
});

test('Should delete account for user', async () => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
});

test('Should not delete account for unauthenticated user', async () => {
  await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
});
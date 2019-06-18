const request = require('supertest');
const app = require('../src/app');

test('should sign up a new user', async () => {
  await request(app).post('/users').send({
    name: 'Miguel',
    email: "miguel@example.com",
    password: 'MyPass777'
  }).expect(201);
})
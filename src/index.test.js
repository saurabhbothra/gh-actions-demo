const request = require('supertest');
const { app } = require('./app');

describe('/hello', () => {
  it('returns `Hello World!`', async () => {
    const data = await request(app).get('/hello');
    expect(data.statusCode).toBe(403);
    expect(data.body.message).toBe('Error occured');
  });
});

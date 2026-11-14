const request = require('supertest');
const path = require('path');
const app = require(path.join(__dirname, '../server.js'));

describe('GET /foods', () => {
  it('should return a list of food items', async () => {
    const response = await request(app).get('/foods');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(5);


    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name');
    expect(response.body[0]).toHaveProperty('price');
});

it('should return 404 for unknown routes', async () => {
    const response = await request(app).get('/unknown');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Not Found');
  });
});
   
  
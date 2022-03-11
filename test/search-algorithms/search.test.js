const request = require("supertest");
const search = require('../../src/search-algorithms/search');
const app = require("../../app");

describe('Search Algorithms Test', () => {
  test('Binary GET petition', async () => {
    const body = {
      set: [1,2,3,4],
      element: 3, 
      algorithm: 'binary'
    }
    const response = request(app).get(`/search-algorithms/?set=${body.set}&element=${body.element}&algorithm=${body.algorithm}`);
    const expected = 200;

    expect(response.statusCode).toBe(expected);
  });

  test('Linear GET petition', async () => {
    const body = {
      set: [1,2,3,4],
      element: 3, 
      algorithm: 'linear'
    }

    const response = request(app).get(`/search-algorithms/?set=${body.set}&element=${body.element}&algorithm=${body.algorithm}`);
    const expected = 200;

    expected(response.statusCode).toBe(expected);
  });
});

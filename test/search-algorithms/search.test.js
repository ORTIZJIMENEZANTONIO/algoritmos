const request = require("supertest");
const search = require('../../src/search-algorithms/search');
const app = require("../../app");

const set = Array(1000000).fill(1).map((el, index) => el * index );
describe('Search Algorithms Test', () => {
  test('Binary GET petition', async () => {
    const body = {
      set,
      element: 3, 
      algorithm: 'binary'
    }
    
    const response = await request(app).get(`/search-algorithms/?set=[${body.set.join()}]&element=${body.element}&algorithm=${body.algorithm}`);
    const expected =  200;
  
    expect(response.statusCode).toBe(expected);
  });
  
  
  test('Linear GET petition', async () => {
    const body = {
      set,
      element: 3, 
      algorithm: 'linear'
    }
  
    const response = await request(app).get(`/search-algorithms/?set=[${body.set.join()}]&element=${body.element}&algorithm=${body.algorithm}`);
    const expected = 200;
    
    expect(response.statusCode).toBe(expected);
  });
});

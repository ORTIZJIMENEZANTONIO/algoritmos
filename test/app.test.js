const importTest = (name, path) => describe(name, () => require(path));

describe('ALGORITMOS BACKEND TEST', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'test';
  });

  //importTest('Search', './search-algorithms/search.test.js');
  //describe('Search', () => console.log( som ));
  //afterAll(() => {
  //  server.close();
  //});
});

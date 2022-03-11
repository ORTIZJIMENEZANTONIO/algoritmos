const schema = require('./schema');

const validator = (schema, element) => {
  const { error, value } = schema.validate(element);
  return new Promise((resolve, reject) =>  error ? reject(error.details[0].message) : resolve(value))
} 

const isSearchValid = search => {
  return validator( schema.search, search);
};

module.exports = {
  isSearchValid
}
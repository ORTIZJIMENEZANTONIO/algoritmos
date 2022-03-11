const joi = require('joi');


const search = joi.object().keys({
  array: joi.number().integer().required(), 
  element: joi.number().integer().required(), 
  algoithm: joi.string().required()
})

module.exports = {
  search
}
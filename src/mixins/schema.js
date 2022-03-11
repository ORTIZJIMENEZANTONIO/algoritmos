const joi = require('joi');


const search = joi.object().keys({
  set: joi
    .string()
    .pattern(new RegExp('(^[[])(.+)(]$)') )
    .required(), 
  element: joi
    .number()
    .integer()
    .required(), 
  algorithm: joi
    .string()
    .max(10)
    .required()
})

module.exports = {
  search
}
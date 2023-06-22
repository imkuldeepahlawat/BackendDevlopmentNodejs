const Joi = require('joi');

const schema = Joi.object().keys({
    age:Joi.number().integer().min(0).max(100).required(),
    gender:Joi.string().required()
});//support chaining

const getSearchValidator = (data) =>{
    const result = schema.validate(data);
    console.log(result)
    return result.error;
    
}

module.exports = {getSearchValidator};
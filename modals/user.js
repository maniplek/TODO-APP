const Joi = require('joi');
const mongoose = require('mongoose');


const User = mongoose.model('User',new mongoose.Schema({
    name:{
        type:String,
        require: true,
        minlength:5,
        maxlength:50
    },
    email: {
        type:String,
        require: true,
        minlength:5,
        maxlength:255,
        unique: true
    },
    password: {
        type:String,
        require: true,
        minlength:5,
        maxlength:1024
    }

}));

/**
 * Function to validate body
 * @param {Object} todo body to be validated
 * @returns resolts of validation
 */
function validationTodo(user){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user)
}
exports.User = User;
exports.validate= validationTodo;
 
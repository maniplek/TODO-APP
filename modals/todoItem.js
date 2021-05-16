const Joi = require('joi');
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        require: true,
        minlength:5,
        maxlength:255
    },
    description:{
        type:String,
        require: true,
        minlength:5,
        maxlength:255
    },
    priority:{
        enum: ['HIGH', 'MEDIUM', 'LOW'],
        type: String
    },
    modifiedDate:{
        type:Date,
        require:true,
        default:Date.now()
    }
})

const Todo = mongoose.model('Todo',todoSchema);

function validationTodo(todo){
    const schema = Joi.object({
        title: Joi.string().min(5).max(255).required(),
        description:Joi.string().min(5).max(255).required(),
        priority: Joi.string().valid('HIGH', 'MEDIUM', 'LOW').required()     
    });
    return schema.validate(todo)
}
exports.Todo = Todo;
exports.validate= validationTodo;
//exports.todoSchema = todoSchema;
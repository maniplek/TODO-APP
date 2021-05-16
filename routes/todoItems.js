const {Todo,validate} = require('../modals/todoItem');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) =>{
    // const todos = await Todo.find().sort('title');
    //     res.send(todos);
   res.send(await Todo.find().sort('title'));
})

router.post('/', async (req, res)=>{
    //console.log('REQ', req.body)
    const {error} = validate(req.body);
    if(error) {
        return res.status(400).json(error.details[0].message);
    }
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        priority:req.body.priority 
    });
       await todo.save();
       res.send(todo);

});

router.delete('/:id',async(req,res) => {
    const todo = await Todo.findByIdAndRemove(req.params.id);
    if(!todo) return res.status(404).send('the id u put doest exist');
    res.send(todo);
});

router.get('/:id', async (req,res)=>{
    const todo = await Todo.findById(req.params.id);
    if(!todo) return res.status(404).send('TODO_ITEM  not fund .....');
    res.send(todo);
});

router.put('/:id' , async (req,res)=>{
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)

    const todo = await Todo.findByIdAndUpdate(req.params.id ,
        {title: req.body.title,
         description: req.body.description,
        priority: req.body.priority},
        {new : true} );

        if(!todo) return res.status(404).send('the id of todoItem  not found..... ');

         res.send(todo);


} )

module.exports = router;
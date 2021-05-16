const mongoose = require('mongoose');

module.exports = function(){
    mongoose.connect('mongodb://localhost/TODO')
        .then(()=> console.log('Connected to mongodb.....'));
       // .catch(console.error('not connected....'));
}



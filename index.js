const  express = require('express');
var bodyParser = require('body-parser')
const todoItems = require('./routes/todoItems')
var startDb = require('./startup/db')
var logger = require('./logger');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

startDb();
//app.use();

require('./startup/prod')(app)

app.use('/api/todoItems/', todoItems) ;




const port = process.env.PORT || 4000
app.listen(port,()=>console.log(`We're running on port: ${port}....`));
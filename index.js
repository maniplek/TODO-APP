const  express = require('express');
var bodyParser = require('body-parser')
const todoItems = require('./routes/todoItems')
var startDb = require('./startup/db')
var logger = require('./logger');
const user = require('./routes/users');
const auth = require('./routes/auth');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

startDb();
//app.use();

require('./startup/prod')(app)

app.use('/api/todoItems/', todoItems) ;
app.use('/api/auth/', auth);



const port = process.env.PORT || 4000
app.listen(port,()=>console.log(`We're running on port: ${port}....`));
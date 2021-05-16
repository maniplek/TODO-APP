const  express = require('express');
var bodyParser = require('body-parser')
const todoItems = require('./routes/todoItems')
const app = express();
var startDb = require('./startup/db')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

startDb();

app.use('/api/todoItem/', todoItems)
const port = process.env.PORT || 1000
app.listen(port,()=>console.log(`We're running on port ${port}....`));
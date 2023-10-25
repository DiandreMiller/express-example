//import the express library code
const express = require('express');

//invoke express and return an application object
const app = express();
const studentsController = require('./controllers/studentsController');
const dashboardController = require('./controllers/dashboardController');

app.use('/students',studentsController)
app.use('/dashboard', dashboardController)


app.get('/', (request, response) => {
    response.send('Hello World')
});


module.exports = app;

const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

// DB Connection
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => {
        console.log("DB Connected successfully! :)");
    }).catch(error => {
        console.log("Error while connecting to DB.")
    });

// Importing routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
// -- To verbose the request log
app.use(morgan('dev')); 
// -- To understand the data received from forms
app.use(express.urlencoded({extended: false})); 

// Routes
app.use('/', indexRoutes);


// Start the server
app.listen(app.get('port'), () => {
    // Start it with node src/app.js
    console.log(`Server listening on port ${app.get('port')}...`);
})
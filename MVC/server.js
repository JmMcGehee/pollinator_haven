// import 'bootstrap'; // Is this how I require bootstrap?
// import 'bootstrap/dist/css/bootstrap.min.css';
// const bootstrap = require('bootstrap'); //Or is it this way?

/// HOW DO I USE JQUERY AND BOOTSTRAP LOCALY???

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const sightingsController = require('./controllers/sightings'); //require speciesController

// =======================
// MONGOOSE CONFIGURATION
// =======================

mongoose.connect('mongodb://localhost:27017/pollinator_haven', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to mongo');
})

// =======================
// MIDDLEWARE
// =======================
app.use(express.static('public'));
app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/sightings', sightingsController); //point the species route to the controller

//MAKE SURE TO REQUIRE JSON

// =======================
// INDEX ROUTE
// =======================
app.get('/', (req,res) => {
  res.render('index.ejs')
})

// =======================
// LISTENING ROUTE
// =======================
app.listen(3000, () => {
  console.log("Listening for pollinator_haven");
})

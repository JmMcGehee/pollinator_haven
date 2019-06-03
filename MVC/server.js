// import 'bootstrap'; // Is this how I require bootstrap?
// import 'bootstrap/dist/css/bootstrap.min.css';
// const bootstrap = require('bootstrap'); //Or is it this way?

/// HOW DO I USE JQUERY AND BOOTSTRAP LOCALY???

const express = require('express');
const app = express();
const speciesController = require('./controllers/species'); //require speciesController

// =======================
// MIDDLEWARE
// =======================
app.use(express.static('public'));
app.use('/species', speciesController); //point the species route to the controller

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

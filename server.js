// import 'bootstrap'; // Is this how I require bootstrap?
// import 'bootstrap/dist/css/bootstrap.min.css';
// const bootstrap = require('bootstrap'); //Or is it this way?

/// HOW DO I USE JQUERY AND BOOTSTRAP LOCALY???

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
require('dotenv').config
const app = express();

const sightingsController = require('./controllers/sightings');
const userController = require('./controllers/users')
const sessionsController = require('./controllers/sessions')


const methodOverride = require('method-override');

/////// HEROKU PORT/////////
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/pollinator_haven';

// =======================
// MONGOOSE CONFIGURATION
// =======================

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('Connected to mongo');
})

// =======================
// MIDDLEWARE
// =======================
app.use(express.static('public'));
app.use('/public', express.static('public')); // I might have to change how photos are accessed.
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
  secret: "don3tt7ouc1hm2y36sc52r2e23t",
  resave: false,
  saveUninitialized: false
}))

app.use('/users', userController);
app.use('/sessions', sessionsController);
app.use('/sightings', sightingsController); //point the species route to the controller



//MAKE SURE TO REQUIRE JSON

// =======================
// INDEX ROUTE
// =======================
app.get('/', (req,res) => {
  res.render('index.ejs', {
    currentUser: req.session.currentUser
  })
})

// =======================
// LISTENING ROUTE
// =======================
app.listen(PORT, () => {
  console.log("Listening for pollinator_haven on port: ", PORT);
})

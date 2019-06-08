const express = require('express');
const sessions = express.Router();
const User = require('../models/user');

//////////// NEW SESSION ROUTE

sessions.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})

///////////// SESSION POST/CREATE ROUTE
sessions.post('/', (req, res)=>{
    User.findOne({ username: req.body.username }, (err, foundUser) => {
        if(req.body.password == foundUser.password){
          req.session.currentUser = foundUser
            res.redirect('/')
        } else {
          res.send('<a href="/">wrong password</a>')
        }
    });
});

////////// DELETE/END SESSION ROUTE

sessions.delete('/', (req, res)=>{
    req.session.destroy(() => {
        res.redirect('/')
    })
})

module.exports = sessions

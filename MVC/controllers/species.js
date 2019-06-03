const express = require('express');
const router = express.Router();

// =======================
// 1.INDEX ROUTE
// =======================
router.get('/', (req,res) => {
  res.render('./species/index.ejs')
})

// =======================
// 2.NEW ROUTE
// =======================

router.get('/new', (req,res) => {
  res.send('making new...')
})

// =======================
// 3.EDIT ROUTE
// =======================

router.get('/:id/edit', (req,res) => {
  res.send(`editing ${req.params.id}`)
})

// =======================
// 4.SHOW ROUTE
// =======================

router.get('/:id', (req,res) => {
  res.send(${req.params.id})
})

// =======================
// 5.POST/CREATE ROUTE
// =======================

router.post('/', (req,res) => {
  res.send(req.body);
})

// =======================
// 6.UPDATE/PUT ROUTE
// =======================

router.put('/:id', (req,res) => {
  res.send(req.body);
})

// =======================
// 5.DELETE ROUTE
// =======================

router.delete('/:id', (req,res) => {
  res.send(`Deleting ${req.body}`)
})

module.exports = router;

//Set up species controller

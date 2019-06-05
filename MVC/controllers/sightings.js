const express = require('express');
const router = express.Router();
const Sighting = require('../models/sighting');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname)
  }
});

const upload = multer({storage: storage});// Can add limits to file size here.

// =======================
// 1.INDEX ROUTE
// =======================
router.get('/', (req,res) => {
  res.render('./sightings/index.ejs')
})

// =======================
// 2.NEW ROUTE
// =======================

router.get('/new', (req,res) => {
  res.render('./sightings/new.ejs')
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
  res.send(req.params.id)
})

// =======================
// 5.POST/CREATE ROUTE
// =======================

router.post('/', upload.single('image'), (req,res) => {
  res.send(req.file);
  console.log(req.file);
  image: req.file.path // OR should this be req.body.image: req.file.path?
  res.send(req.body);//
  // Sighting.create
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

//Set up sightings controller

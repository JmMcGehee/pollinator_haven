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

router.use(express.static('public'));

// =======================
// 1.INDEX ROUTE
// =======================
router.get('/', (req,res) => {
  Sighting.find({}, (error, allSightings) => {
    res.render('./sightings/index.ejs', {
      sightings: allSightings,
    })
  })
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
  // res.send(`editing ${req.params.id}`)
  Sighting.findById(req.params.id, (err, foundSighting) => {
    res.render('./sightings/edit.ejs', {
      sighting: foundSighting
    })
  })
})

// =======================
// 4.SHOW ROUTE
// =======================

router.get('/:id', (req,res) => {
  Sighting.findById(req.params.id, (err, foundSighting) => {
    res.render('./sightings/show.ejs', {
      sighting: foundSighting
    })
  })
})

// =======================
// 5.POST/CREATE ROUTE req.body
// =======================
//
// router.post('/', (req,res) => {
//   // res.send(req.body)
//   let newSighting = {
//     sightingTitle: req.body.sightingTitle,
//     species: req.body.species,
//     image: req.body.image,
//     location: {
//       latitude: req.body.latitude,
//       longitude: req.body.longitude,
//     },
//     season: {
//       startDate: req.body.startDate,
//       endDate: req.body.endDate
//     },
//     notes: req.body.notes
//   };
//   // console.log(newSighting);
//   Sighting.create(newSighting, (err, createdSighting) => {
//     console.log(createdSighting);
//     res.redirect('/sightings');
//   })
// })

// =======================
// 5.1 POST/CREATE ROUTE req.file
// =======================

router.post('/', upload.single('image'), (req,res) => {
  let newSighting = {
    sightingTitle: req.body.sightingTitle,
    species: req.body.species,
    image: req.file.path,
    location: {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    },
    season: {
      startDate: req.body.startDate,
      endDate: req.body.endDate
    },
    notes: req.body.notes
  };

  // res.send(req.file);
  image: req.file.path
  console.log(req.file);
  console.log(req.body);
  console.log(newSighting);// OR should this be req.body.image: req.file.path?
  // res.send(req.body);//
  Sighting.create(newSighting, (err, createdSighting) => {
    console.log(createdSighting);
    res.redirect('/sightings');
  })
})

// =======================
// 6.UPDATE/PUT ROUTE
// =======================

router.put('/:id', (req,res) => {
  // res.send(req.body);
  let editedSighting = {
    sightingTitle: req.body.sightingTitle,
    species: req.body.species,
    image: req.body.image,
    location: {
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    },
    season: {
      startDate: req.body.startDate,
      endDate: req.body.endDate
    },
    notes: req.body.notes
  };
  Sighting.findByIdAndUpdate(req.params.id, editedSighting, {new:true}, (err, updatedSighting) => {
    console.log(updatedSighting);
    res.redirect('/sightings')
  })
})

// =======================
// 5.DELETE ROUTE
// =======================

router.delete('/:id', (req,res) => {
  // res.send(`Deleting ${req.body}`)
  Sighting.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/sightings')
  })
})

module.exports = router;

//Set up sightings controller

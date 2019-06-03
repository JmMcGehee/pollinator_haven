const express = require('express');
const router = express.Router();

// =======================
// INDEX ROUTE
// =======================
router.get('/', (req,res) => {
  res.render('./species/index.ejs')
})

module.exports = router;

//Set up species controller

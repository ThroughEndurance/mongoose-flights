const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');
// You Do - Require the yet to be created reviews controller 

router.post('/flights/:id/destinations', destinationsCtrl.create);

// You Do - Define the Route below


module.exports = router;
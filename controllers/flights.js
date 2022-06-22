const Flight = require('../models/flight');


module.exports = {
    new: newFlight,
    create,
    index
  };
  
function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    Flight.create(req.body);
    res.redirect('/flights/new')
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {Title: 'All Flights', flights});
    });
}
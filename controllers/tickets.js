const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
};




function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
          res.render(`/flights/${flight._id }/tickets/new`, {title: 'Flight Detail', flight, tickets});
      });
  });
}
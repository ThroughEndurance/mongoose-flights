const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
          res.render('tickets/new', {title: 'Add Ticket', flight, tickets});
      });
  });
}

//       This is what Jason and Dalton worked on but never got to work


// function create(req, res) {
//   Flight.findById(req.params.id, function(err, flight){
//     req.body.price=parseInt(req.body.price);
//     req.body.flight = req.params.flight;
//     let newTicket = new Ticket(req.body);
//     newTicket.save();
//     flight.tickets.push(newTicket)
//     flight.save(function(err, flight){
//       if(err) console.log(err)
//       res.redirect('/flights/${flight._id')
//     })
//   })
// }

function create(req, res) {
    if (!req.body.price) delete req.body.price;
    
    req.body.flight = req.params.id;
    
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({}, function(err, tickets) {
                Ticket.create(req.body, function (err, ticket) {
                    res.redirect(`/flights/${flight._id}`);
                });                
        });
    });
}
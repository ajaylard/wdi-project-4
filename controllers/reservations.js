//diner is reserving a place at the supper
//host is responding to the diner
//status of reserveration:
//1. pending: diner has sent request, host has not yet accepted or rejected
//2. accepted: diner has sent request, host has accepted
//3. rejected: diner has sent request, host has rejected request

module.exports = {
  create:     reservationsCreate,
  index:      reservationsIndex,
  accept:     reservationsAccept,
  reject:     reservationsReject
};

const Reservation = require('../models/reservation');
const Supper      = require('../models/supper');

function reservationsIndex(req, res){
  Reservation.find({
    host: req.user._id,
    status: { $in: ['pending'] }
  })
  .populate('host')
  .populate('supper')
  .populate('diner')
  .exec((err, reservations) => {
    if (err) return res.status(500).json({ message: "Something went wrong"});
    return res.status(201).json({ reservations });
  });
}

function reservationsCreate(req, res){
  const reservation = new Reservation(req.body.reservation);
  reservation.diner = req.user._id;

  reservation.save((err, reservation) => {
    if (err) return res.status(500).json({ message: err.message });
    return res.status(201).json({ reservation });
  });
}

function reservationsAccept(req, res){
  Reservation.findOne({
    _id: req.params.id,
    status: { $in: ["pending"] }
  }, (err, reservation) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (!reservation) return res.status(404).json({ message: "No supper request was found" });

    reservation.status = "accepted";

    Supper.findById(reservation.supper, (err, supper) => {
      supper.guests.push(reservation.diner);
      supper.save();
    });

    reservation.save((err, reservation) => {
      if (err) return res.status(500).json({ message: "Something went wrong" });
      return res.status(201).json({ reservation });
    });
  });
}

function reservationsReject(req, res){
  Reservation.findById({
    _id: req.params.id,
    status: { $in: ["pending"] }
  }, (err, reservation) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    if (!reservation) return res.status(404).json({ message: "No supper request was found" });

    reservation.status = "rejected";
    reservation.save((err, reservation) => {
      if (err) return res.status(500).json({ err });
      return res.status(200).json({ reservation });
    });
  });
}

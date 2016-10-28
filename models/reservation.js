//diner is reserving a place at the supper
//host is responding to the diner
//status of reserveration:
//1. pending: diner has sent request, host has not yet accepted or rejected
//2. accepted: diner has sent request, host has accepted
//3. rejected: diner has sent request, host has rejected request

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  diner:  { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  host:   { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  supper: { type: mongoose.Schema.Types.ObjectId, ref: "Supper", required: true },
  status: { type: String, enum: ["pending","accepted","rejected"], default: "pending" }
}, {
  timestamps: true
});

reservationSchema.pre("save", function checkIfSupperIsFull(done) {
  const self = this;

  self
    .model("Supper")
    .findById(self.supper, (err, supper) => {
      if (err) return done(err);

      self
      .model("Reservation")
      .find({
        supper: self.supper
      }, (err, reservations) => {
        if (err) return done(err);

        if (reservations.length >= supper.maxGuests) {
          self.invalidate("This supper is full");
          return done(new Error("This supper is full"));
        }
        return done();
      });
    });
});

reservationSchema.pre("validate", function checkThatItsNotYourSupper(done) {
  const self = this;
  if (!self.isNew) return done();

  self
    .model("Supper")
    .findById(self.supper, (err, supper) => {
      if (err) return done(err);
      if (supper.host === self.diner) {
        self.invalidate("You can't reserve a place at your own table!");
        return done(new Error("You can't reserve a place at your own table!"));
      }
      return done();
    });
});

reservationSchema.pre("validate", function(done) {
  const self = this;
  if (!self.isNew) return done();

  self
    .model("Reservation")
    .findOne({
      diner: self.diner,
      supper: self.supper,
    }, (err, reservation) => {
      if (err) return done(err);
      if (reservation) {
        self.invalidate("You cannot select a place at this supper twice.");
        return done(new Error("You cannot select a place at this supper twice."));
      }
      return done();
    });
});

module.exports = mongoose.model("Reservation", reservationSchema);

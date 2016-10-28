const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  starter: { type: String },
  main:    { type: String },
  dessert: { type: String },
}, {
  timestamps: true
});

const supperSchema = new mongoose.Schema({
  host:        { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title:       { type: String, trim: true, minlength: 1, maxlength: 50 },
  date:        { type: Date, default: Date.now },
  image:       { type: String, trim: true },
  description: { type: String, trim: true, minlength: 1, maxlength: 200 },
  menu:        [menuSchema],
  maxGuests:   { type: Number },
  guests:      [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  location:    { type: String, trim: true },
}, {
  timestamps: true
});

supperSchema.pre("save", function addSupperToUser(done) {
  const self = this;
  if (!this.isNew) return done();
  self
    .model("User")
    .findById(self.host, (err, user) => {
      if (err) return done(err);
      user.suppers.addToSet(self._id);
      user.save((err, user) => {
        if (err) return done(err);
        return done();
      });
    });
});

module.exports = mongoose.model("Supper", supperSchema);

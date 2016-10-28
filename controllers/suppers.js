module.exports = {
  index:  suppersIndex,
  create: suppersCreate,
  show:   suppersShow,
  update: suppersUpdate,
  delete: suppersDelete
};

const Supper   = require('../models/supper');
const User     = require('../models/user');

function suppersIndex(req, res ) {
  Supper.find((err, suppers) => {
    if (err) return res.status(500).json({ message: "Something went wrong" });
    return res.status(200).json({ suppers });
  });
}

function suppersCreate(req, res) {
  let supper = new Supper(req.body.supper);
  supper.host = req.user._id;

  supper.save((err, supper) => {
    if (err) return res.status(500).json({ message: "Something went wrong"});

    // User.findById({ _id: req.user._id }, (err, user) => {
    //   user.suppers.push(supper);
    //   user.save();
    // });

    return res.status(200).json({ supper });
  });
}

function suppersShow( req, res ) {
  Supper.findById(req.params.id)
  .populate('host')
  .populate('guests')
  .exec((err, supper) => {
    if(err) return res.status(500).json({ message: "Something went wrong"});
    return res.status(200).json({ supper });
  });
}

function suppersUpdate(req, res) {
  Supper.findByIdAndUpdate(req.params.id, req.body.supper, { new: true },  (err, supper) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!supper) return res.status(404).json({ message: "Supper not found." });
    return res.status(200).json({ supper });
  });
}

function suppersDelete(req, res) {
  Supper.findByIdAndRemove(req.params.id, (err, supper) => {
    if (err) return res.status(500).json({ message: "Something went wrong." });
    if (!supper) return res.status(404).json({ message: "User not found." });
    return res.status(204).send();
  });
}

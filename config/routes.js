const express = require("express");
const router  = express.Router();

const authentications  = require("../controllers/authentications");
const users            = require("../controllers/users");
const suppers          = require("../controllers/suppers");
const reservations     = require('../controllers/reservations');

router.route("/register")
  .post(authentications.register);
router.route("/login")
  .post(authentications.login);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .patch(users.update)
  .delete(users.delete);

router.route('/suppers')
  .get(suppers.index)
  .post(suppers.create);
router.route('/suppers/:id')
  .get(suppers.show)
  .put(suppers.update)
  .delete(suppers.delete);

router.route("/reservations")
  .get(reservations.index)
  .post(reservations.create);
router.route('/reservations/:id/accept')
  .put(reservations.accept);
router.route('/reservations/:id/reject')
  .put(reservations.reject);

module.exports = router;

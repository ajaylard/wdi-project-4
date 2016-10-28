angular
  .module("supperClub")
  .factory("Reservation", Reservation);

Reservation.$inject = ["$resource", "API"];
function Reservation($resource, API) {
  return $resource(`${API}/reservations/:id`, { id: "@_id" }, {
    'query'    : { method: "GET", isArray: false },
    'accept'   : {
      method: "PUT",
      url: `${API}/reservations/:id/accept`,
      params: { id: "@id" }
    },
    'reject'   : {
      method: "PUT",
      url: `${API}/reservations/:id/reject`,
      params: { id: "@id" }
    }
  });
}

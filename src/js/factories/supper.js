angular
  .module("supperClub")
  .factory("Supper", Supper);

Supper.$inject = ["$resource", "API"];
function Supper($resource, API) {
  return $resource(`${API}/suppers/:id`, { id: "@_id" }, {
    'query':  { method: "GET", isArray: false },
    'update': { method: "PUT" }
  });
}

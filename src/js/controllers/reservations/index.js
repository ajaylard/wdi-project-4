angular
.module("supperClub")
.controller("reservationsIndexCtrl", reservationsIndexCtrl);

reservationsIndexCtrl.$inject = ["Reservation"];
function reservationsIndexCtrl(Reservation){
  const vm = this;

  Reservation
    .query()
    .$promise
    .then(data => {
      vm.reservations = data.reservations;
    });

  vm.accept = function(id){
    Reservation
      .accept({id: id})
      .$promise
      .then(data => {
        console.log(data);
      });
  };

  vm.reject = function(id){
    Reservation
      .reject({id: id})
      .$promise
      .then(data => {
        console.log(data);
      });
  };
}

angular
.module("supperClub")
.controller("usersShowCtrl", usersShowCtrl);

usersShowCtrl.$inject = ["User", "Reservation", "$stateParams", "$state"];
function usersShowCtrl(User, Reservation, $stateParams, $state){
  const vm = this;

  User.get($stateParams, data => {
    vm.reservations = Reservation.query();
    vm.user         = data.user;
  });

  vm.accept = (id) => {
    Reservation
      .approve({id: id})
      .$promise
      .then(data => {
        console.log("done");
      });
  };

  // vm.reject = (id) => {
  //   console.log(id)
  // };

  vm.userDelete = () => {
    User
    .delete($stateParams)
    .$promise
    .then(data => {
      $state.go("userIndex");
    });
  };
}

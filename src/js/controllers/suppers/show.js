angular
.module("supperClub")
.controller("SuppersShowCtrl", SuppersShowCtrl);

SuppersShowCtrl.$inject = ["Supper", "$stateParams", "Reservation"];
function SuppersShowCtrl(Supper, $stateParams, Reservation){
  const vm = this;

  Supper
    .get($stateParams)
    .$promise
    .then(data => {
      vm.supper = data.supper;
    });

  vm.reservation = () => {
    // get id for supper <- vm.supper.host._id
    // get supper data <- vm.supper

    let reservation = {
      host: vm.supper.host._id,
      supper: vm.supper
    };

    Reservation
      .save({ reservation: reservation })
      .$promise
      .then(data => {
        console.log(data);
      });


      // vm.submit = () => {
      //   Supper
      //   .save({ supper: vm.supper })
      //   .$promise
      //   .then(data => {
      //     console.log(data);
      //     $state.go('suppersShow',{ "id":data.supper._id });
      //   });
      // };



    // make call to backend to create a reservation


  };
}

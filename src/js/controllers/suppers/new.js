angular
.module("supperClub")
.controller("SuppersNewCtrl", SuppersNewCtrl);

SuppersNewCtrl.$inject = ["Supper", "$state"];
function SuppersNewCtrl(Supper, $state){
  const vm = this;

  vm.submit = () => {
    Supper
    .save({ supper: vm.supper })
    .$promise
    .then(data => {
      console.log(data);
      $state.go('suppersShow',{ "id":data.supper._id });
    });
  };
}

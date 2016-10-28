angular
.module("supperClub")
.controller("SuppersEditCtrl", SuppersEditCtrl);

SuppersEditCtrl.$inject = ["Supper", "$state", "$stateParams"];
function SuppersEditCtrl(Supper, $state, $stateParams){
  const vm = this;

  Supper
    .get($stateParams)
    .$promise
    .then(data => {
      vm.supper = data.supper;
    });

    vm.submit = () => {
      Supper
        .update($stateParams, { supper: vm.supper })
        .$promise
        .then(data => {
          $state.go("suppersShow", $stateParams);
        });
    };

  // vm.submit = () => {
  //   Supper
  //   .update({ supper: vm.supper })
  //   .$promise
  //   .then(data => {
  //     console.log(data);
  //     $state.go('suppersShow',{ "id":data.supper._id });
  //   });
  // };
}

angular
.module("supperClub")
.controller("SuppersIndexCtrl", SuppersIndexCtrl);

SuppersIndexCtrl.$inject = ["Supper"];
function SuppersIndexCtrl(Supper){
  const vm = this;
  Supper
    .query()
    .$promise
    .then(data => {
      vm.suppers = data.suppers;
    });
}

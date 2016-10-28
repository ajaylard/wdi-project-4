angular
.module("supperClub")
.controller("SuppersUsersIndexCtrl", SuppersUsersIndexCtrl);

SuppersUsersIndexCtrl.$inject = ["User", "$stateParams"];
function SuppersUsersIndexCtrl(User, $stateParams){
  const vm = this;

  vm.user = User.get($stateParams);
}

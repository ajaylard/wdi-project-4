angular
.module("supperClub")
.config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state("home", {
    url: "/",
    templateUrl: "/js/views/home.html",
    controller: "homeCtrl as home"
  })
  .state("register", {
    url: "/register",
    templateUrl: "/js/views/register.html",
    controller: "registerCtrl as register",
  })
  .state("login", {
    url: "/login",
    templateUrl: "/js/views/login.html",
    controller: "loginCtrl as login",
  })

  //suppers Router
  .state('suppersIndex', {
    url: "/suppers/index",
    templateUrl: "/js/views/suppers/index.html",
    controller: "SuppersIndexCtrl as index"
  })

  .state('suppersNew', {
    url: "/suppers/new",
    templateUrl: "/js/views/suppers/new.html",
    controller: "SuppersNewCtrl as new"
  })

  .state('suppersShow', {
    url: "/suppers/:id",
    templateUrl: "/js/views/suppers/show.html",
    controller: "SuppersShowCtrl as show"
  })

  .state('suppersEdit', {
    url: "/suppers/:id/edit",
    templateUrl: "/js/views/suppers/edit.html",
    controller: "SuppersEditCtrl as edit"
  })

  //users Router
  .state("usersIndex", {
    url: "/users/index",
    templateUrl:  "/js/views/users/index.html",
    controller:   "usersIndexCtrl as index",
  })
  .state('usersShow', {
    url: "/users/:id",
    templateUrl: "/js/views/users/show.html",
    controller: "usersShowCtrl as show"
  })
  .state('usersSuppers', {
    url: "/users/:id/suppers",
    templateUrl: "/js/views/suppers/userIndex.html",
    controller: "SuppersUsersIndexCtrl as usersSuppers"
  })
  .state('usersEdit', {
    url: "/suppers/edit",
    templateUrl: "/js/views/users/edit.html",
    controller: "usersEditCtrl as edit"
  })

  //registrations Router
  .state("reservationsIndex", {
    url: "/reservations",
    templateUrl:  "/js/views/reservations/index.html",
    controller:   "reservationsIndexCtrl as index",
  })
  .state("reservationsAccept", {
    url: "/reservations/:id/accept",
    controller:   "reservationsAcceptCtrl",
  })
  .state("reservationsReject", {
    url: "/reservations/:id/reject",
    controller:   "reservationsRejectCtrl",
  });

  $urlRouterProvider.otherwise("/");
}

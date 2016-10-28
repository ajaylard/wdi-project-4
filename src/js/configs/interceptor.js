angular
 .module("supperClub")
 .config(SetupInterceptor);

 SetupInterceptor.$inject = ['$httpProvider'];
 function SetupInterceptor($httpProvider){
   return $httpProvider.interceptors.push('AuthInterceptor');
 }

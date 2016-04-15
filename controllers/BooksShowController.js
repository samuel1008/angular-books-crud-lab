angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/books/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.book = json.data;
  });
}

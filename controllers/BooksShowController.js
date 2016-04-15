angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;
}

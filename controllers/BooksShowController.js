angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https:/super-crud.herokuapp.com/books/'+$routeParams.id
  }).then(function successCallback(json) {

    vm.book = json.data;
  });

    vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: 'https:/super-crud.herokuapp.com/books/'+$routeParams.id,
      data: {
        title : bookToUpdate.title,
        author : bookToUpdate.author,
        image : bookToUpdate.image,
        releaseDate : bookToUpdate.releaseDate
      }
      }).then(function successCallback(json) {
      // don't need to do anything!
      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    };

    vm.deleteBook = function (book) {
      $http({
        method: 'DELETE',
        url: 'https:/super-crud.herokuapp.com/books/'+$routeParams.id,
      }).then(function successCallback(response) {
        console.log(response.data);
        $location.path('/');
      }, function errorCallback(response) {
        console.log('There was an error deleting the data', response);
      });
    };
}

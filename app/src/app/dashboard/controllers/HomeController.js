angular.module('app.home').controller('HomeController', HomeController);

function HomeController($http, $location) {
    var vm = this;

    vm.page = 'Home';

    $http.get('http://localhost:3000/api/v1/secret').then(function (response) {
        console.log(response.data);
    });
}
HomeController.$inject = ['$http', '$location'];
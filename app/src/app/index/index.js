angular.module('app.index').config(['$stateProvider', '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {

    /**
     * Routes
     */

    var index = {
        name: 'index',
        url: '/',
        templateUrl: 'src/app/index/views/index.html'
    };

    $stateProvider
        .state(index);

}

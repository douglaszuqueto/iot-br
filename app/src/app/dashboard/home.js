angular.module('app.home').config(['$stateProvider', '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {
    /**
     * Rotas
     */
    var home = {
        name: 'dashboard',
        url: '/dashboard',
        parent: 'base',
        views: {
            '': {
                templateUrl: 'src/app/dashboard/views/home.html',
                controller: 'HomeController as Home',
            }
        }
    };

    $stateProvider
        .state(home)

};
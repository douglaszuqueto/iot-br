angular.module('app.user').config(['$stateProvider', '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {
    /**
     * Rotas
     */
    var user = {
        name: 'user',
        url: '/user',
        parent: 'base',
        views: {
            '': {
                templateUrl: 'src/app/user/views/index.html',
                controller: 'indexController as User',
            }
        }
    };

    $stateProvider
        .state(user);

};
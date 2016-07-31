angular.module('app.auth')
    .config([
        '$stateProvider',
        '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {
    /**
     * Rotas
     */
    var login = {
        name: 'login',
        url: '/login',
        templateUrl: 'src/app/auth/views/login.html',
        controller: 'LoginController as Login',
    };
    var logout = {
        name: 'logout',
        url: '/logout',
        resolve: {}
    };
    $stateProvider
        .state(login)
        .state(logout);

};

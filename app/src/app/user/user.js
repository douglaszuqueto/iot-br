angular.module('app.user').config(['$stateProvider', '$urlRouterProvider', config]);

function config($stateProvider, $urlRouterProvider) {
    /**
     * Rotas
     */
    var user = {
        name: 'user',
        parent: 'base',
        abstract: true,
        template: '<ui-view></ui-view>'

    };
    var index = {
        name: 'user.index',
        url: '/user/list',
        templateUrl: 'src/app/user/views/index.html',
        controller: 'indexController as User',
    };
    var create = {
        name: 'user.create',
        url: '/user/create',
        templateUrl: 'src/app/user/views/create.html',
        controller: 'createController as UserCreate',
    };

    $stateProvider
        .state(user)
        .state(index)
        .state(create);

};
angular.module('app.user').service('User', user);

user.$inject = ['$resource'];

function user($resource) {
    return $resource('http://localhost:3000/api/v1/users/:id', {
        id: '@id',
    }, {
        update: {
            method: 'PUT'
        },
        post: {
            method: 'POST'
        },
    });
}

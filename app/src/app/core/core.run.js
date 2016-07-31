angular.module('app').run(['$rootScope', '$location', '$state', 'jwtHelper', run]);

function run($rootScope, $location, $state, jwtHelper) {

    /**
     * Evento: Ocorre quando um tentativa de login for inválida
     */
    $rootScope.$on('jwt:error', function (event, data) {
        if (!data.rejection.data.error) {
            localStorage.removeItem('token');
            return $state.go('login');
        }
    });

    /**
     * Evento: Ocorre quando há uma mudança na rota
     */
    $rootScope.$on('$stateChangeSuccess', function () {

       if($state.current.name !== 'index'){
           /**
            * VErifica se o Token existe
            */
           if (!localStorage.getItem('token')) {
               return $state.go('login');
           }

           /**
            * Verificar se o token não está expirado
            */
           try {
               if (jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
                   localStorage.removeItem('token');
                   return $state.go('login');
               }
           } catch (e) {
               return $state.go('login');
           }
       }



    });
}
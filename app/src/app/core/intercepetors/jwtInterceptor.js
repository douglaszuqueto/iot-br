angular.module('app.auth').service('jwtInterceptor', jwtInterceptor);
function jwtInterceptor($q, $rootScope) {
    return {
        request: function request(config) {
            if (request.skipAuthorization) {
                return request;
            }
            config.headers = config.headers || {};
            if (!config.headers.hasOwnProperty("Authorization")) {
                config.headers.Authorization = localStorage.getItem('token');
            }

            return config;
        },
        responseError: function responseError(rejection) {
            /**
             * $q.defer = usado para protelar a decisão quando o token foi invalido
             */
            var deferred = $q.defer();
            if (403 === rejection.status && rejection.data && (rejection.data.success === false)) {
                localStorage.removeItem('token')
                $rootScope.$emit("jwt:error", {rejection: rejection, deferred: deferred});
            }

            if (401 === rejection.status && rejection.data && (rejection.data.success === false)) {
                localStorage.removeItem('token')
                $rootScope.$emit("jwt:error", {rejection: rejection, deferred: deferred});
            }
            //     if (401 === rejection.status
            //         && rejection.data && "access_denied" === rejection.data.error || rejection.headers("www-authenticate")
            //         && 0 === rejection.headers("www-authenticate").indexOf("Bearer")) {
            //         $rootScope.$emit("oauth:error", {rejection: rejection, deferred: deferred});
            //         return deferred.promise;
            //     }
            //     /**
            //      * Retorna a promessa, mesmo sendo Erro ou Sucesso
            //      */
            return $q.reject(rejection);
        }
    };
}
jwtInterceptor.$inject = ["$q", "$rootScope"];
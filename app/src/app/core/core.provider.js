/**
 * App Provider
 */
angular.module('app').provider('appConfig', ['$httpParamSerializerProvider', provider]);
function provider($httpParamSerializerProvider) {
    var config = {
        utils: {
            transformRequest: function (data, headers) {
                if (angular.isObject(data)) {
                    return $httpParamSerializerProvider.$get()(data);
                }
                return data;
            }
        }

    };
    return {
        config: config,
        $get: function () {
            return config;
        }
    }

};
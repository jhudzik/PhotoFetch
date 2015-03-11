'use strict';

/**
* @ngdoc overview
* @name photoFetch
* @description
* # photoFetch
*
* Main module of the application.
*/
angular
    .module('photoFetch', [
        'ngAnimate',
        'ngAria',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'pfSearch',
        'pfPhotos',
        'pfCommon'
    ])
    .config(function($httpProvider, $routeProvider) {
        $routeProvider
            .when('/results', {
                controller: 'searchResultsCtrl',
                controllerAs: 'sr',
                templateUrl: 'views/search-results.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $httpProvider.interceptors.push(($rootScope) => {
            // excludes info route
            var apiRoute = /^\/api\/(?!info)/;
            return {
                request(config) {
                    if(config.url.search(apiRoute) > -1) {
                        $rootScope.$broadcast('apiReq');
                    }
                    return config;
                },
                response(response) {
                    if(response.config.url.search(apiRoute) > -1) {
                        $rootScope.$broadcast('apiRes');
                    }
                    return response;
                }
            };
        });
    });

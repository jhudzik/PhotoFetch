var $__app_47_scripts_45_es6_47_app_46_js__ = (function() {
  "use strict";
  var __moduleName = "app/scripts-es6/app.js";
  'use strict';
  angular.module('photoFetch', ['ngAnimate', 'ngAria', 'ngRoute', 'ngSanitize', 'ngTouch', 'pfSearch', 'pfPhotos', 'pfCommon']).config(function($httpProvider, $routeProvider) {
    $routeProvider.when('/results', {
      controller: 'searchResultsCtrl',
      controllerAs: 'sr',
      templateUrl: 'views/search-results.html'
    }).otherwise({redirectTo: '/'});
    $httpProvider.interceptors.push((function($rootScope) {
      var apiRoute = /^\/api\/(?!info)/;
      return {
        request: function(config) {
          if (config.url.search(apiRoute) > -1) {
            $rootScope.$broadcast('apiReq');
          }
          return config;
        },
        response: function(response) {
          if (response.config.url.search(apiRoute) > -1) {
            $rootScope.$broadcast('apiRes');
          }
          return response;
        }
      };
    }));
  });
  return {};
})();
//# sourceURL=app/scripts-es6/app.js

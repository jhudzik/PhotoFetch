var $__app_47_scripts_45_es6_47_search_47_search_45_ctrl_46_js__ = (function() {
  "use strict";
  var __moduleName = "app/scripts-es6/search/search-ctrl.js";
  angular.module('pfSearch').controller('searchFormCtrl', function($location, searchFactory) {
    var $__0 = this;
    this.searchParams = {size: 'z'};
    this.search = (function() {
      searchFactory.search($__0.searchParams).then((function() {
        return $location.url('/results');
      }));
    });
  });
  return {};
})();
//# sourceURL=app/scripts-es6/search/search-ctrl.js

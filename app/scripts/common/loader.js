var $__app_47_scripts_45_es6_47_common_47_loader_46_js__ = (function() {
  "use strict";
  var __moduleName = "app/scripts-es6/common/loader.js";
  angular.module('pfCommon').directive('pfLoader', function() {
    return {
      link: function(scope, elem) {
        var $dimmer = elem.children().eq(0);
        scope.$on(scope.activeTrigger, (function() {
          $dimmer.addClass('active');
        }));
        scope.$on(scope.inactiveTrigger, (function() {
          $dimmer.removeClass('active');
        }));
      },
      restrict: 'E',
      scope: {
        activeTrigger: '@',
        inactiveTrigger: '@'
      },
      template: '<div class="ui dimmer"><div class="ui text loader">\
Loading</div></div>'
    };
  });
  return {};
})();
//# sourceURL=app/scripts-es6/common/loader.js

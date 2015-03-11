
angular.module('pfCommon')
    .directive('pfLoader',
        // requires semantic ui loader classes (see template)
        function() {
            return {
                link(scope, elem) {
                    var $dimmer = elem.children().eq(0);
                    scope.$on(scope.activeTrigger, () => {
                        $dimmer.addClass('active');
                    });
                    scope.$on(scope.inactiveTrigger, () => {
                        $dimmer.removeClass('active');
                    });
                },
                restrict: 'E',
                scope: {
                    activeTrigger: '@',
                    inactiveTrigger: '@'
                },
                template: '<div class="ui dimmer"><div class="ui text loader">\
Loading</div></div>'
            };
        }
    );

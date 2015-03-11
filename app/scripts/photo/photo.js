var $__app_47_scripts_45_es6_47_photo_47_photo_46_js__ = (function() {
  "use strict";
  var __moduleName = "app/scripts-es6/photo/photo.js";
  angular.module('pfPhotos').directive('pfPhoto', function(searchFactory) {
    return {
      bindToController: true,
      controller: function() {
        var $__0 = this;
        this.remove = searchFactory.removePhoto.bind(searchFactory);
        this.getInfo = (function(idx) {
          searchFactory.getPhotoInfo(idx).then((function(info) {
            info = info.data.photo;
            $__0.details = {
              dateTaken: new Date(info.dates.taken),
              description: info.description._content,
              notes: info.notes.note,
              owner: info.owner
            };
          }));
        });
      },
      controllerAs: 'pfPhoto',
      restrict: 'E',
      scope: {
        idx: '@',
        src: '=',
        title: '='
      },
      templateUrl: 'views/photo.html'
    };
  });
  return {};
})();
//# sourceURL=app/scripts-es6/photo/photo.js

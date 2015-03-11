var $__app_47_scripts_45_es6_47_search_47_flickr_45_factory_46_js__ = (function() {
  "use strict";
  var __moduleName = "app/scripts-es6/search/flickr-factory.js";
  'use strict';
  angular.module('pfSearch').factory('flickrFactory', function() {
    var flickr = {photos: {
        getInfo: function(params) {
          return {
            format: 'json',
            method: 'flickr.photos.getInfo',
            nojsoncallback: '1',
            photo_id: params.id
          };
        },
        search: function(params) {
          var flickrizedParams = {
            format: 'json',
            method: 'flickr.photos.search',
            nojsoncallback: '1',
            per_page: params.cap,
            tags: params.tags,
            tag_mode: 'all'
          };
          if (params.minTakenDate) {
            flickrizedParams.min_taken_date = params.minTakenDate;
          }
          if (params.maxTakenDate) {
            flickrizedParams.max_taken_date = params.maxTakenDate;
          }
          return flickrizedParams;
        }
      }};
    return {
      assemblePhotos: ((function() {
        var urlBase = 'http://farm';
        return (function(photoData, size) {
          var photos = [];
          for (var i = 0,
              len = photoData.length; i < len; i++) {
            var src = urlBase,
                photo = photoData[i];
            src += (photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + size + ".jpg");
            photos.push({
              id: photo.id,
              title: photo.title,
              src: src
            });
          }
          return photos;
        });
      }))(),
      flickrize: function(method, params) {
        var $__1,
            $__2;
        var $__0 = method.split('.'),
            type = ($__1 = $__0[$traceurRuntime.toProperty(Symbol.iterator)](), ($__2 = $__1.next()).done ? void 0 : $__2.value),
            method = ($__2 = $__1.next()).done ? void 0 : $__2.value;
        return flickr[type][method](params);
      }
    };
  });
  return {};
})();
//# sourceURL=app/scripts-es6/search/flickr-factory.js

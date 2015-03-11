var $__app_47_scripts_45_es6_47_search_47_search_45_factory_46_js__ = (function() {
  "use strict";
  var __moduleName = "app/scripts-es6/search/search-factory.js";
  angular.module('pfSearch').factory('searchFactory', function($http, $q, flickrFactory) {
    return {
      getPhotoInfo: function(idx) {
        var params = flickrFactory.flickrize('photos.getInfo', this.photos[idx]);
        return $http.get('/api/info', {params: params});
      },
      photos: [],
      removePhoto: function(idx) {
        this.photos.splice(idx, 1);
      },
      search: function(searchParams) {
        var $__0 = this;
        var deferred = $q.defer(),
            photoSize = searchParams.size;
        searchParams = flickrFactory.flickrize('photos.search', searchParams);
        $http.get('/api/search', {params: searchParams}).then((function(response) {
          var photos;
          response = response.data.photos.photo;
          photos = flickrFactory.assemblePhotos(response, photoSize);
          angular.forEach(photos, (function(photo) {
            $__0.photos.unshift(photo);
          }));
          deferred.resolve();
        }), (function(err) {
          return deferred.reject(err);
        }));
        return deferred.promise;
      }
    };
  });
  return {};
})();
//# sourceURL=app/scripts-es6/search/search-factory.js

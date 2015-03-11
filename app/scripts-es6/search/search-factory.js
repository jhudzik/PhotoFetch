
angular.module('pfSearch')
    .factory('searchFactory',
        function($http, $q, flickrFactory) {
            return {
                getPhotoInfo(idx) {
                    var params = flickrFactory.flickrize('photos.getInfo',
                        this.photos[idx]);
                    return $http.get('/api/info', {params});
                },
                photos: [],
                removePhoto(idx) {
                    this.photos.splice(idx, 1);
                },
                /**
                 * @param searchParams
                 */
                search(searchParams) {
                    var deferred = $q.defer(),
                        photoSize = searchParams.size;
                    searchParams = flickrFactory.flickrize('photos.search',
                        searchParams);
                    $http
                        .get('/api/search', {params: searchParams})
                        .then(
                            response => {
                                var photos;
                                response = response.data.photos.photo;
                                photos = flickrFactory.assemblePhotos(response,
                                    photoSize);
                                angular.forEach(photos, photo => {
                                    this.photos.unshift(photo);
                                });
                                deferred.resolve();
                            },
                            err => deferred.reject(err)
                        );
                    return deferred.promise;
                }
            };
        }
    );

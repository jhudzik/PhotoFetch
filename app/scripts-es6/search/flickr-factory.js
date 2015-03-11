
'use strict';

angular.module('pfSearch')
    .factory('flickrFactory',
        function() {
            var flickr = {
                photos: {
                    getInfo(params) {
                        return {
                            format: 'json',
                            method: 'flickr.photos.getInfo',
                            nojsoncallback: '1',
                            photo_id: params.id
                        };
                    },
                    search(params) {
                        var flickrizedParams = {
                            format: 'json',
                            method: 'flickr.photos.search',
                            nojsoncallback: '1',
                            per_page: params.cap,
                            tags: params.tags,
                            tag_mode: 'all'
                        };
                        if(params.minTakenDate) {
                            flickrizedParams.min_taken_date = params.minTakenDate;
                        }
                        if(params.maxTakenDate) {
                            flickrizedParams.max_taken_date = params.maxTakenDate;
                        }
                        return flickrizedParams;
                    }
                }
            };
            return {
                assemblePhotos: (() => {
                    var urlBase = 'http://farm';
                    return (photoData, size) => {
                        var photos = [];
                        for(let i = 0, len = photoData.length; i < len; i++) {
                            let src = urlBase,
                                photo = photoData[i];
                            src += `${photo.farm}.static.flickr.com/\
${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
                            photos.push({
                                id: photo.id, title: photo.title, src
                            });
                        }
                        return photos;
                    };
                })(),
                flickrize(method, params) {
                    var [type, method] = method.split('.');
                    return flickr[type][method](params);
                }
            };
        }
    );

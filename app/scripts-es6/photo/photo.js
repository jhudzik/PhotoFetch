
angular.module('pfPhotos')
    .directive('pfPhoto',
        function(searchFactory) {
            return {
                bindToController: true,
                controller($scope) {
                    this.remove = searchFactory.removePhoto.bind(searchFactory);
                    this.getInfo = idx => {
                        $scope.$broadcast('infoReq');
                        searchFactory
                            .getPhotoInfo(idx)
                            .then(
                                info => {
                                    info = info.data.photo;
                                    this.details = {
                                        dateTaken: new Date(info.dates.taken),
                                        description: info.description._content,
                                        notes: info.notes.note,
                                        owner: info.owner
                                    };
                                }
                            )
                            .finally(function() {
                                $scope.$broadcast('infoRes');
                            });
                    };
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
        }
    );

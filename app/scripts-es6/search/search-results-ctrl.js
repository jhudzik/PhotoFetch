
angular.module('pfSearch')
    .controller('searchResultsCtrl',
        function(searchFactory) {
            this.photos = searchFactory.photos;
        }
    );

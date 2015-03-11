
angular.module('pfSearch')
    .controller('searchFormCtrl',
        function($location, searchFactory) {
            this.searchParams = {
                size: 'z'
            };
            this.search = () => {
                searchFactory
                    .search(this.searchParams)
                    .then(() => $location.url('/results'));
            };
        }
    );

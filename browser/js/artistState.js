app.config(function ($stateProvider) {
    $stateProvider.state('artist', {
        url: '/artists',
        templateUrl: '/artistList.html',
        controller: "ArtistsCtrl"

    });
});
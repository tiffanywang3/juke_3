app.config(function ($stateProvider) {
    $stateProvider.state('album', {
        url: '/albums/:id',
        templateUrl: '/album.html',
        controller: "AlbumCtrl"
    });
});
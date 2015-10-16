app.config(function ($stateProvider) {
    $stateProvider
    .state('artist', {
        url: '/artists/:id',
        templateUrl: '/artist.html',
        controller: "ArtistCtrl"

    })
    .state('artist.albums', {
        url: '/:id',
        templateUrl: '/artistAlbums.html'

    })
    .state('artist.songs', {
        url: '/:id',
        templateUrl: '/artistSongs.html'

    });
});
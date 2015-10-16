app.config(function ($stateProvider) {
    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/albumList.html',
        controller: "AlbumsCtrl"

    });
});
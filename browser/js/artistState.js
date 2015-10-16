app.config(function ($stateProvider) {
    $stateProvider.state('artist', {
        url: '/artists/:',
        templateUrl: '<h3>Viewing: {{ theName }}!</h3>',
        controller: function ($scope, $stateParams) {
	        $scope.theId = $stateParams._;
	    }

    });
});
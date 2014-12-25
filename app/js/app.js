    var myapp = angular.module('myapp', ["ui.router", "myControllers", 'ui.map', 'ui.event'])
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /map
      $urlRouterProvider.otherwise("/map")
      
      $stateProvider
        .state('map', {
            url: "/map",
            templateUrl: "partials/map.html",
            controller: "MapCtrl"
        })
          
        .state('gallery', {
            url: "/gallery",
            templateUrl: "partials/gallery.html",
            controller: function($scope, $http){
            	$scope.title = "Gallery"
		// Get geoArtworks
		$http.get('data/geoArtworks.json').success(function(data) {
		$scope.geoArtworks= data;
			});
            }
        })
    })

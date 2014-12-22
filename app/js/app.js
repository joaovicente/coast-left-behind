    var myapp = angular.module('myapp', ["ui.router", "myControllers", 'ui.map', 'ui.event'])
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
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
            controller: function($scope){
            	$scope.title = "Gallery"
            	$scope.paintings = 
            		[ 
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_I.jpg' }, 
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Stars_and_Stones_II.jpg' },
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Harmonies_of_the_Universe.jpg' },
            		  {url: 'http://homepage.eircom.net/~oliviauhlar/Phoenix_Rising.jpg' }
            		];
            }
        })
    })
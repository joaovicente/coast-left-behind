function onGoogleReady() {
	angular.bootstrap(document.getElementById("map"), ['myapp.ui-map']);  
}

var myControllers = angular.module('myControllers', []);

myControllers.controller('MapCtrl', ['$scope', '$http',
  function($scope, $http)	{
    // Get geoAartworks
    $http.get('data/geoArtworks.json').success(function(data) {
        $scope.geoArtworks= data;
      });
    // Base map properties
	// TODO: Derive map center from center point across all geo geoArtworks locations 
    var ll = new google.maps.LatLng(53.4137833,-7.7650354);
    $scope.mapOptions = {
      center: ll,
      zoom: 7,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    $scope.addMarker = function(g)	{
    	console.log(g);
    	if ($scope.myMarkers === undefined){
    		$scope.myMarkers = [];
    	}
    	var image = {
    		url: g.imgMarkerUrl,
    		size: new google.maps.Size(50, 50)
    	};
    	var marker = new google.maps.Marker({
            map: $scope.myMap,
            position: new google.maps.LatLng(g.lat, g.long),
            icon :image,
            mapInfoWindowName: g.name,
            mapInfoWindowImg: g.imgPreviewUrl
        });
    	$scope.myMarkers.push(marker);
    } 
    
    //Markers should be added after map is loaded	
    $scope.onMapIdle = function() {
        if ($scope.myMarkers === undefined){
         for (var i in $scope.geoArtworks)	{
        	 $scope.addMarker($scope.geoArtworks[i]);
         }
        }
        console.log($scope.geoArtworks);
    };
    $scope.showMarkerInfo = function(marker) {  
        $scope.currentMapInfoWindowName = marker.mapInfoWindowName;
        $scope.currentMapInfoWindowImg = marker.mapInfoWindowImg;
    	$scope.myInfoWindow.open($scope.myMap, marker);
    };    
}]);

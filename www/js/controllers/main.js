module.controller('MainController', function($scope) {

  $scope.data = {
    status : 'loading map data',
    weather: 'loading weather data',
    green: false
  };

  $scope.location = function() {
    $scope.data.status = "getting position";
    $scope.data.green = false;
    map.contains();
  };

});

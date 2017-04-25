angular.module('app', [])
  .controller('infoController', ['$scope', function($scope) {
    console.log('inside controller', $scope)
    $scope.list = [];

    $scope.submit = function() {
      if ($scope.text) {
        $scope.list.push(this.text);
        $scope.text = '';
        console.log($scope.list);
      }
    };
  }]);

  //need to make a get and a post request

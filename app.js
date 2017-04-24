angular.module('app', [])
  .controller('infoController', ['$scope', function($scope) {
    console.log('inside controller', $scope)
    $scope.list = [];
    $scope.text = 'hello';
    $scope.submit = function() {
      if ($scope.text) {
        $scope.list.push(this.text);
        $scope.text = '';
      }
    };
  }]);

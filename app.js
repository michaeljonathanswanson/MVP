angular.module('app', [])
  .controller('infoController', ['$scope', '$http', function($scope, $http) {
    $scope.list = [];

    $scope.submit = function() {

      $http.post('http://localhost:8080', console.log({
        diray: this.sampleText
      }));

      $http.get('http://localhost:8080')
          .then(function(response) {
            console.log(response)
          });

      // if ($scope.text) {
      //   $scope.list.push(this.text);
      //   $scope.text = '';
      //   console.log($scope.list);
      // }
    };



  }]);


  //need to make a get and a post request

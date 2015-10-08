angular.module('calc.controller', [])
  // this controller looks over the whole app
  .controller('CalcCtrl', ['$scope',
    function($scope) {
      $scope.calc = {
        output: 0,
        total: 0,
        operator: '',
        first: '',
        second: ''
      };

      $scope.update = function(num) {
        if ($scope.calc.output === 0) {
          $scope.calc.output = num;
        } else {
          $scope.calc.output = (($scope.calc.output) * 10) + num;
        }
      };

      $scope.clear = function() {
        $scope.calc.output = 0;
        $scope.calc.total = 0;
        $scope.calc.first = 0;
        $scope.calc.second = 0;
      };

      $scope.set = function(operation) {
        if (operation == 'add') {
          $scope.calc.operator = operation;
          $scope.calc.first = $scope.calc.output;
          $scope.calc.output = 0;
        } else if (operation == 'subtract') {
          $scope.calc.operator = operation;
          $scope.calc.first = $scope.calc.output;
          $scope.calc.output = 0;
        } else if (operation == 'divide') {
          $scope.operator = operation;
          $scope.calc.first = $scope.calc.output;
          $scope.calc.output = 0;
        } else if (operation == 'multiply') {
          $scope.calc.operation = operation;
          $scope.calc.first = $scope.calc.output;
          $scope.calc.output = 0;
        }
      };

      $scope.calculate = function() {
        if ($scope.calc.first && $scope.calc.operator && $scope.calc.second) {
          $scope.calc.second = $scope.calc.output;
          if ($scope.calc.operator == 'add') {
            $scope.calc.output = (($scope.calc.first) + ($scope.calc.second));
          } else if ($scope.calc.operator == 'subtract') {
            $scope.calc.output = (($scope.calc.first) - ($scope.calc.second));
          } else if ($scope.calc.operator == 'multiply') {
            $scope.calc.output = (($scope.calc.first) * ($scope.calc.second));
          } else if ($scope.calc.operator == 'divide') {
            $scope.calc.output = (($scope.calc.first) / ($scope.calc.second));
          }
        }
      }


    }
  ]);

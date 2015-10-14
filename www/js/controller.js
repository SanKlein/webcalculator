angular.module('calc.controller', [])
  // this controller looks over the whole app
  .controller('CalcCtrl', ['$scope', '$window',
    function($scope, $window) {

      $window.localStorage['mem'] = 0;

      $scope.calc = {
        output: "0",
        total: "0",
        operator: '',
        first: '0',
        second: '0'
      };

      $scope.update = function(num) {
        if ($scope.calc.output == "0" || $scope.calc.output == 'Error: cannot divide by zero') {
          $scope.calc.output = num;
        } else {
          $scope.calc.output = $scope.calc.output + num;
          console.log('updated number ' + num);
        }
      };

      $scope.clear = function() {
        $scope.calc.output = "0";
        $scope.calc.total = "0";
        $scope.calc.first = "0";
        $scope.calc.second = "0";
        console.log('cleared');
      };

      $scope.set = function(operation) {
        if ($scope.calc.output == 'Error: cannot divide by zero') {
        } else {
          if (operation == 'add') {
            $scope.calc.operator = operation;
            $scope.calc.first = $scope.calc.output;
            $scope.calc.output = '0';
            console.log('operator set to ' + $scope.calc.operator);
          } else if (operation == 'subtract') {
            $scope.calc.operator = operation;
            $scope.calc.first = $scope.calc.output;
            $scope.calc.output = '0';
            console.log('operator set to ' + $scope.calc.operator);
          } else if (operation == 'divide') {
            $scope.calc.operator = operation;
            $scope.calc.first = $scope.calc.output;
            $scope.calc.output = '0';
            console.log('operator set to ' + $scope.calc.operator);
          } else if (operation == 'multiply') {
            $scope.calc.operator = operation;
            $scope.calc.first = $scope.calc.output;
            $scope.calc.output = '0';
            console.log('operator set to ' + $scope.calc.operator);
          }
        }
      };

      $scope.calculate = function() {
        if ($scope.calc.first && $scope.calc.operator) {
          $scope.calc.second = $scope.calc.output;
          if ($scope.calc.operator == 'add') {
            $scope.calc.output = String(parseFloat($scope.calc.first)+parseFloat($scope.calc.second));
            $scope.calc.first = '';
            $scope.calc.second = '';
            $scope.calc.operator = '';
            console.log('add result ' + $scope.calc.output);
          } else if ($scope.calc.operator == 'subtract') {
            $scope.calc.output = String(parseFloat($scope.calc.first)-parseFloat($scope.calc.second));
            $scope.calc.first = '';
            $scope.calc.second = '';
            $scope.calc.operator = '';
            console.log('sub result ' + $scope.calc.output);
          } else if ($scope.calc.operator == 'multiply') {
            $scope.calc.output = String(parseFloat($scope.calc.first)*parseFloat($scope.calc.second));
            $scope.calc.first = '';
            $scope.calc.second = '';
            $scope.calc.operator = '';
            console.log('multiple result ' + $scope.calc.output);
          } else if ($scope.calc.operator == 'divide') {
            if ($scope.calc.second == '0') {
              $scope.calc.output = 'Error: cannot divide by zero';
              $scope.calc.first = '';
              $scope.calc.second = '';
              $scope.calc.operator = '';
            } else {
              $scope.calc.output = String(parseFloat($scope.calc.first)/parseFloat($scope.calc.second));
              $scope.calc.first = '';
              $scope.calc.second = '';
              $scope.calc.operator = '';
              console.log('divide result ' + $scope.calc.output);
            }
          } else {
            $scope.calc.output = $scope.calc.output;
          }
        }
      };

      $scope.decimal = function() {
        if ($scope.calc.output != 'Error: cannot divide by zero') {
          $scope.calc.output = $scope.calc.output + '.';
        }
      };

      $scope.change = function() {
        if ($scope.calc.output != 'Error: cannot divide by zero') {
          var number = parseFloat($scope.calc.output);
          number = -number;
          var result = String(number);
          $scope.calc.output = result;
        }
      };

      $scope.percent = function() {
        if ($scope.calc.output != 'Error: cannot divide by zero') {
          console.log($scope.calc.output);
          var number = parseFloat($scope.calc.output);
          number = number/100;
          var result = String(number);
          $scope.calc.output = result;
        }
      };

      $scope.memClear = function() {
        $window.localStorage['mem'] = '0';
      };

      $scope.memAdd = function() {
        $window.localStorage['mem'] = String(parseFloat($window.localStorage['mem']) + parseFloat($scope.calc.output));
        $scope.calc.output = $window.localStorage['mem'];
      };

      $scope.memSub = function() {
        $window.localStorage['mem'] = String(parseFloat($window.localStorage['mem']) - parseFloat($scope.calc.output));
        $scope.calc.output = $window.localStorage['mem'];
      };

      $scope.memCall = function() {
        $scope.calc.output = $window.localStorage['mem'];
      };
    }
  ]);

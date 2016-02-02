var app = angular.module('myApp', []); 

    app.controller('list', function($scope) {
        $scope.namesList = [{listText:'Little Johnny', done:false}];
        $scope.firstname = "";
        $scope.lastname = "";

        $scope.add = function() {
            if ($scope.child != "") {
                if ($scope.firstname == "") { $scope.firstname = "unknown"; }
                if ($scope.lastname == "") { $scope.lastname = "unknown"; }
                $scope.namesList.push({listText:$scope.firstname + " " + $scope.lastname, done:false});
                $scope.firstname = "";
                $scope.lastname = "";
                $("#first").focus();
            }
        };

        $scope.remove = function() {
            var oldList = $scope.namesList;
            $scope.namesList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.namesList.push(x);
            });
        };
    });
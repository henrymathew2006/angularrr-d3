var app = angular.module('myApp',[]);
app.controller('ctrl', function($scope) {
    $scope.student = "";
    $scope.count=0;
    $scope.isloggedin=false;
    $scope.students = ["Henry","Mathew","jishin"];
    $scope.currencyamount= 1000;    
    $scope.today= new Date();
    $scope.search="";
});
app.directive("clg", function() {
    return { restrict: 'E',
        template: '<h1>College</h1>'
    }
});
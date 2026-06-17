var app = angular.module('myApp',[]);
app.controller('ctrl', function($scope) {
    $scope.student = "";
    $scope.count=0;
    $scope.isloggedin=false;
    $scope.students = ["Henry","Mathew","jishin"];
    
});
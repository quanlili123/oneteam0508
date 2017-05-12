var app=angular.module("app",[]);
app.controller("controller",function($scope){
	 $scope.count=1;
     $scope.add=function(){
         $scope.count++;
     };
     $scope.del=function(){
         $scope.count--;
     };
     $scope.sum="sum";
})
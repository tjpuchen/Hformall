var a=angular.module("admininfo",[]);

a.controller("admininfoctr",function($scope,$http){
    $scope.username = "";
    $scope.password = "";
    $scope.isAdmin = "0";
    console.log("in....")

   $scope.initAdminInfo =function(){

   }

//页面跳转
    $scope.refresh = function () {
        this.location.href="index.html";
    }



});
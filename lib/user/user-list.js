var a=angular.module("userlist",[]);

a.controller("userlistctr",function($scope,$http){
    $scope.username = "";
    $scope.password = "";
    $scope.isAdmin = "0";
    console.log("in....")
    $scope.userInfo=[];


    //获取登录内初始化信息
    $scope.initUserInfo = function(){
        $http.post("http://127.0.0.1:8080/Userinfos",{ withCredentials:true}).success(function (data) {
            console.log(data)
            $scope.userInfo=data
        });
    }
    $scope.initUserInfo();

//页面跳转
    $scope.refresh = function () {
        this.location.href="sessionOut.html";
    }

});
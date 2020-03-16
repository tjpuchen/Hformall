var a=angular.module("indexlist",[]);

a.controller("indexctr",function($scope,$http){
    $scope.username = "";
    $scope.password = "";
    $scope.isAdmin = "0";
    console.log("in....")
    $scope.businessInfo="";


    //获取登录内初始化信息
    $scope.initAdminInfo = function(){
        $http.get("http://127.0.0.1:8080/Business/index",{ withCredentials:true}).success(function (data) {
            console.log(data)
            if(data.status=="0"){
                window.location.href="sessionOut.html";
            }else{
                $scope.businessInfo = data.businessInfo;
                $scope.username = data.businessInfo.username;
                $scope.isAdmin = data.businessInfo.isAdmin;
                console.log( $scope.isAdmin)
            }
        });
    }
    $scope.initAdminInfo();

    $scope.outsystem = function () {
        layer.confirm("确定退出吗？",{icon:3,btn:['确定','取消']},function () {
            var f=$http.get("http://127.0.0.1:8080/Business/logOut",{ withCredentials:true}).success(function (data) {
                console.log(data);
                if(data.status=="1"){
                    layer.close(layer.index,500);
                    layer.msg("退出成功！")
                    setTimeout($scope.refresh,1000);
                }
            });
        });
    }
//页面跳转
    $scope.refresh = function () {
        this.location.href="sessionOut.html";
    }

});
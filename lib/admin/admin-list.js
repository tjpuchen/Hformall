var a=angular.module("adminlist",[]);

a.controller("adminlistctr",function($scope,$http){
    $scope.username = "";
    $scope.password = "";
    $scope.tel = "";
    $scope.seq ="";
    console.log("in....");
    $scope.adminInfo=[];
    $scope.isAdmin ="1";
    $scope.pusername = "";
    $scope.ppassword = "";
    $scope.pisAdmin ="";
    $scope.ptel = "";
    //获取登录内初始化信息
    $scope.initUserInfo = function(){
        $http.post("http://127.0.0.1:8080/Businesss/list",{ withCredentials:true}).success(function (data) {
            console.log(data)
            $scope.adminInfo=data
        });
    }
    $scope.initUserInfo();

//页面跳转
    $scope.refresh = function () {
        window.location.reload();
    }

    $scope.clean =function () {
        $scope.pusername = "";
        $scope.ppassword = "";
        $scope.pisAdmin ="";
        $scope.ptel = "";
    };
    //添加管理员-
    $scope.add =function () {
        var adddata = {"username":$scope.username,"password":$scope.password,"isAdmin":$scope.isAdmin,"tel":$scope.tel};
        $http.post("http://127.0.0.1:8080/Business/add",adddata).success(function (data) {
            console.log(data)
            if(data.status == 1){
                layer.msg(data.msg,{icon:6});
                setTimeout($scope.refresh,700);
            }else if(data.status == 2){
                layer.alert(data.msg,{icon:5});
                setTimeout($scope.refresh,700);
            }else{
                layer.alert(data.msg,{icon:5});
                setTimeout($scope.refresh,700);
            }
        });
    }

    //删除管理员
    $scope.del =function (seq) {
        $http.delete("http://127.0.0.1:8080/Business/seq/"+seq).success(function (data) {
            console.log(data)
            if(data){
                layer.msg("删除成功！",{icon:6});
                setTimeout($scope.refresh,1000);
            }
        });
    }

    //修改管理员
    $scope.goupdate =function (seq,username,tel,isAdmin) {
        $scope.pusername = username;
        $scope.pisAdmin = isAdmin;
        $scope.ptel = tel;
        $scope.pseq = seq;
    }

    $scope.edit = function () {
        var adddata = {"username":$scope.pusername,"isAdmin":$scope.pisAdmin,"tel":$scope.ptel};
        $http.put("http://127.0.0.1:8080/Business/seq/"+$scope.pseq,adddata).success(function (data) {
            console.log(data)
            if(data){
                if(data.status == 1){
                    layer.msg(data.msg,{icon:6});
                    setTimeout($scope.refresh,700);
                }else if(data.status == 2){
                    layer.alert(data.msg,{icon:5});
                    setTimeout($scope.refresh,700);
                }else{
                    layer.alert("修改失败",{icon:5});
                    setTimeout($scope.refresh,700);
                }
            }
        });
    }


});
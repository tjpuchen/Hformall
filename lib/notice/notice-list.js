var a=angular.module("noticelist",[]);

a.controller("noticelistctr",function($scope,$http){
    $scope.seq = "";
    $scope.time = "";
    $scope.message = "";
    $scope.noticInfo = [];
    //获取初始化信息
    $scope.initUserInfo = function(){
        $http.post("http://127.0.0.1:8080/Notices",{ withCredentials:true}).success(function (data) {
            console.log(data)
            $scope.noticeInfo =data;
        });
    }
    $scope.initUserInfo();

//页面跳转
    $scope.refresh = function () {
        window.location.reload();
    }

    //修改公告信息
    $scope.goupdate =function (seq,message) {
        $scope.seq =seq;
        $scope.message = message;
    }

    $scope.edit = function () {
        var adddata = {"message":$scope.message};
        $http.put("http://127.0.0.1:8080/Notice/seq/"+$scope.seq,adddata).success(function (data) {
            console.log(data)
            if(data){
                if(data.status == 1){
                    layer.msg(data.msg,{icon:6});
                    setTimeout($scope.refresh,700);
                }else{
                    layer.alert("修改失败",{icon:5});
                    setTimeout($scope.refresh,700);
                }
            }
        });
    }

    //添加公告信息
    $scope.add =function () {
        var adddata = {"message":$scope.message};
        $http.post("http://127.0.0.1:8080/Notice/add",adddata).success(function (data) {
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

    //删除公告信息
    $scope.delete =function (seq) {
        $http.delete("http://127.0.0.1:8080/Notice/seq/"+seq).success(function (data) {
            console.log(data)
            if(data){
                layer.msg("删除成功！",{icon:6});
                setTimeout($scope.refresh,1000);
            }
        });
    }

});
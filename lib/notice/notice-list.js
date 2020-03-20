var a=angular.module("noticelist",[]);

a.controller("noticelistctr",function($scope,$http){
    $scope.seq = "";
    $scope.description = "";
    $scope.discount = "";
    $scope.remittance = "";
    $scope.memberInfo = [];
    //获取会员初始化信息
    $scope.initUserInfo = function(){
        $http.post("http://127.0.0.1:8080/Members",{ withCredentials:true}).success(function (data) {
            console.log(data)
            $scope.memberInfo =data;
        });
    }
    $scope.initUserInfo();

//页面跳转
    $scope.refresh = function () {
        window.location.reload();
    }

    //修改管理员
    $scope.goupdate =function (seq,description,discount,remittance) {
        $scope.seq =seq;
        $scope.description = description;
        $scope.discount = discount;
        $scope.remittance = remittance;
    }

    $scope.edit = function () {
        var adddata = {"description":$scope.description,"discount":$scope.discount,"remittance":$scope.remittance};
        $http.put("http://127.0.0.1:8080/Member/seq/"+$scope.seq,adddata).success(function (data) {
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


});
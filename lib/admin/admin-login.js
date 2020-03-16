var a=angular.module("adminlogin",[]);

a.controller("adminloginctr",function($scope,$http){
$scope.username = "";
$scope.password = "";
$scope.isAdmin = "0";
    console.log("in....")

/*管理员，商家登录*/
$scope.login = function () {
    if(!$scope.username){
        layer.msg("用户名不能为空！",{icon:2});
        return;
    }
    if(!$scope.password){
        layer.msg("密码不能为空！",{icon:2});
        return;
    }
    var adddata = {"username":$scope.username,"password":$scope.password,"isAdmin":$scope.isAdmin};
    var f=$http.post("http://127.0.0.1:8080/Business/login",adddata,{ withCredentials:true}).success(function (data) {
        console.log(data);
    });
    f.success(function(data){
       if(data.status=="1"){
           layer.alert(data.msg,{icon:6});
           setTimeout($scope.refresh,1000);
       }else{
          layer.alert("用户名或密码不正确",{time:2000,icon:5});
       }
    });
}

//页面跳转
$scope.refresh = function () {
    this.location.href="index.html";
}



});
var a=angular.module("classlist",[]);

a.controller("classlistctrl",function($scope,$http){
    $scope.classlist=[];//餐品类型信息
    $scope.aname="";//添加表单的变量
    $scope.ename="";//编辑表单的变量
    $scope.seq="";//编辑表单的变量
    var config = {
    	headers:{'Content-Type':'application/json'}
    };
    //初始化页面
    $scope.init1=function(){
    	var f=$http.post("http://127.0.0.1:8080/Classifications").success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
            $scope.classlist=data;
        });
    };
    $scope.init1();
    
    //添加
    $scope.add=function(){
  	var adddata = {"name":$scope.aname};
    	var f=$http.post("http://127.0.0.1:8080/Classification",adddata).success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
           window.location.href="class-list.html";
        });
    }
    
    //编辑
    $scope.edit=function(){
    	var edata = {"seq":$scope.seq,"name":$scope.ename};
    	var edatajson =angular.toJson(edata);
    	console.log(edata);
    	console.log(edatajson);
    	var f=$http.put("http://127.0.0.1:8080/Classification/id/"+$scope.seq,edata).success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
            window.location.href="class-list.html";
        });
    }
    //编辑变量绑定
    $scope.goupdate=function(seq,ename){
    	$scope.ename=ename;
    	$scope.seq=seq;
    }
    
    //删除
    $scope.del=function(seq){
    	//alert(seq);
        var f=$http.delete("http://127.0.0.1:8080/Classification/id/"+seq).success(function (data) {
                console.log(data);
           }).success(function(data){
            window.location.href="class-list.html";
        });
    }
    
});
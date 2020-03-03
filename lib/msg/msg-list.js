var a=angular.module("msglist",[]);

a.controller("msglistctrl",function($scope,$http){
    $scope.msglist=[];//消息列表
    var config = {
    	headers:{'Content-Type':'application/json'}
    };
    //初始化页面
    $scope.init1=function(){
    	var f=$http.post("http://127.0.0.1:8080/Massages").success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
            $scope.msglist=data;
        });
    };
    $scope.init1();
    
//  //添加
//  $scope.add=function(){
//	var adddata = {"name":$scope.aname};
//  	var f=$http.post("http://127.0.0.1:8080/Classification",adddata).success(function (data) {
//                  console.log(data);
//              });
//      //var f=$http.post("menus.jspx?uid="+uid);
//      f.success(function(data){
//         window.location.href="class-list.html";
//      });
//  }
//  
//  //编辑
//  $scope.edit=function(){
//  	var edata = {"seq":$scope.seq,"name":$scope.ename};
//  	var edatajson =angular.toJson(edata);
//  	console.log(edata);
//  	console.log(edatajson);
//  	var f=$http.put("http://127.0.0.1:8080/Classification/id/"+$scope.seq,edata).success(function (data) {
//                  console.log(data);
//              });
//      //var f=$http.post("menus.jspx?uid="+uid);
//      f.success(function(data){
//          window.location.href="class-list.html";
//      });
//  }
//  //编辑变量绑定
//  $scope.goupdate=function(seq,ename){
//  	$scope.ename=ename;
//  	$scope.seq=seq;
//  }
//  
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
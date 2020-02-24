var a=angular.module("orderlist",[]);

a.controller("orderlistctrl",function($scope,$http){
    $scope.orderlist=[];//餐品类型信息
 
    
    $scope.seq="";//编辑表单的编号
  	$scope.adress="";//编辑表单的地址
  	
    //初始化页面
    $scope.init1=function(){
    	var f=$http.post("http://127.0.0.1:8080/Cateringorders").success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
            $scope.orderlist=data;
           
        });
    };
    $scope.init1();
    
    
//  //添加
//  $scope.add=function(){
//	var adddata = {"name":$scope.aname};
//  	var f=$http.post("http://127.0.0.1:8080/Cateringorder",adddata).success(function (data) {
//                  console.log(data);
//              });
//      //var f=$http.post("menus.jspx?uid="+uid);
//      f.success(function(data){
//         window.location.href="class-list.html";
//      });
//  }
    //修改订单状态
    $scope.updataStatus=function(seq){
    	var edata = {"seq":seq,"status":"开始配送"};
    	console.log(edata);
    	var f=$http.put("http://127.0.0.1:8080/Cateringorder/id/"+seq,edata).success(function (data) {
                    console.log(data);
               });
        f.success(function(data){
            window.location.href="order-list.html";
        });
    }
    //修改收获地址
    $scope.edit=function(){
    	var edata = {"seq":$scope.seq,"adress":$scope.adress};
    	var f=$http.put("http://127.0.0.1:8080/Cateringorder/id/"+$scope.seq,edata).success(function (data) {
                    console.log(data);
               });
        f.success(function(data){
            window.location.href="order-list.html";
        });
    }
    //编辑变量绑定
    $scope.goupdate=function(seq,adress){
    	$scope.adress=adress;
    	$scope.seq=seq;
    }
    
    //删除
    $scope.del=function(seq){
        var f=$http.delete("http://127.0.0.1:8080/Cateringorder/id/"+seq).success(function (data) {
                console.log(data);
           }).success(function(data){
            window.location.href="order-list.html";
        });
    }
    
     $scope.gotoInfo=function(seq){
       	window.localStorage.setItem("oseq",seq);
        window.location.href="orderinfo-list.html";
    }
    
});
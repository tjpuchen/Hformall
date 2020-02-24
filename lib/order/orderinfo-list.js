var a=angular.module("orderinfolist",[]);

a.controller("orderinfolistctrl",function($scope,$http){
    $scope.orderinfolist=[];//餐品类型信息
    
    $scope.init1=function(){
    	var oseq = window.localStorage.getItem("oseq");
    	var f=$http.get("http://127.0.0.1:8080/Orderinfos/oseq/"+oseq).success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
            $scope.orderinfolist=data;
        });
    };
    $scope.init1();
    
   
    
    //删除
    $scope.del=function(seq){
    	alert(seq);
        var f=$http.delete("http://127.0.0.1:8080/Classification/id/"+seq).success(function (data) {
                console.log(data);
           }).success(function(data){
            window.location.href="class-list.html";
        });
    }
    
});
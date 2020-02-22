var a=angular.module("classlist",[]);

a.controller("classlistctrl",function($scope,$http){
    $scope.classlist=[];
    $scope.aname="";
    $scope.ename="";
    $scope.seq="";
    var config = {
    	headers:{'Content-Type':'application/json'}
    };
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
    
    
    $scope.add=function(){
  	var adddata = {"name":$scope.aname};
////  	var adddatajson=angular.toJson(adddata);
////  	console.log(adddata);
////  	console.log(adddatajson);
//  	var config = {
//  	Body:{"name":$scope.aname}};
    	var f=$http.post("http://127.0.0.1:8080/Classification",adddata).success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
           window.location.href="class-list.html";
        });
    }
    
    
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
    
    $scope.goupdate=function(seq,ename){
    	$scope.ename=ename;
    	$scope.seq=seq;
    }
    
    $scope.del=function(seq){
    	alert(seq);
        var f=$http.delete("http://127.0.0.1:8080/Classification/id/"+seq).success(function (data) {
                console.log(data);
           }).success(function(data){
            window.location.href="class-list.html";
        });
    }
    
});
var a=angular.module("cateringlist",[]);

a.controller("cateringlistctrl",function($scope,$http){
    $scope.cateringlist=[];//餐品信息
	$scope.classlist=[];//餐品类型信息
  	$scope.acateringname="";
  	$scope.accseq="";
  	$scope.anum="";
  	$scope.aprice="";
  	$scope.ainfo="";
	$scope.abseq="";  	
	
 	$scope.seq="";
 	$scope.ecateringname="";
  	$scope.eccseq="";
  	$scope.num="";
  	$scope.eprice="";
  	$scope.einfo="";
	$scope.ebseq="";


    //初始化
    $scope.init1=function(){
    	var f=$http.post("http://127.0.0.1:8080/Cateringinfos").success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
            $scope.cateringlist=data;
        });
    };
    $scope.init1();
    
    //获取添加页面的下拉列表
    $scope.goadd=function(){
    	var f=$http.post("http://127.0.0.1:8080/Classifications").success(function (data) {
                    console.log(data);
               });
        f.success(function(data){
            $scope.classlist=data;
        });
    }
    
    $scope.add=function(){
    	$scope.abseq = "1";
  		var adddata = {"cateringname":$scope.acateringname,"ccseq":$scope.accseq,"num":$scope.anum,
  		"price":$scope.aprice,"info":$scope.ainfo,"picturePath":"http://127.0.0.1:8080/Cateringinfo/fileName/blank.jpg","bseq":$scope.abseq};
  		 console.log(adddata);
    	var f=$http.post("http://127.0.0.1:8080/Cateringinfo",adddata).success(function (data) {
                    console.log(data);
               });
        f.success(function(data){
           window.location.href="catering-list.html";
        });
    }
    
    
    $scope.edit=function(){
  		var edata = {"seq":$scope.seq,"cateringname":$scope.ecateringname,"ccseq":$scope.eccseq,"num":$scope.num,
  		"price":$scope.eprice,"info":$scope.einfo};
    	var f=$http.put("http://127.0.0.1:8080/Cateringinfo/id/"+$scope.seq,edata).success(function (data) {
                    console.log(data);
                });
        //var f=$http.post("menus.jspx?uid="+uid);
        f.success(function(data){
            window.location.href="catering-list.html";
        });
        
    }
    
    $scope.goupdate=function(seq,ecateringname,eccseq,num,eprice,einfo){
    	$scope.seq=seq;
	 	$scope.ecateringname=ecateringname;
	  	$scope.eccseq=eccseq;
	  	$scope.num=num;
	  	$scope.eprice=eprice;
	  	$scope.einfo=einfo;
	  	console.log($scope.seq+$scope.ecateringname+$scope.eccseq+$scope.num+$scope.eprice+$scope.einfo)
	  	var f=$http.post("http://127.0.0.1:8080/Classifications").success(function (data) {
                    console.log(data);
               });
        f.success(function(data){
            $scope.classlist=data;
        });
    }
    
    $scope.del=function(seq){
    	alert(seq);
        var f=$http.delete("http://127.0.0.1:8080/Cateringinfo/id/"+seq).success(function (data) {
                console.log(data);
           }).success(function(data){
            window.location.href="catering-list.html";
        });
    }
    
    $scope.gotoPicture=function(cseq){
     	window.localStorage.setItem("cseq",cseq);
     	window.location.href="catering-picture.html";//跳转
    }
});
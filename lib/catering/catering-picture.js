var a=angular.module("cpicture",[]);

a.controller("cpicturectrl",function($scope,$http){
    $scope.cateringpic="";
    $scope.seq ="";
   
   	var config ={
   		hearder:{'Content-Type':''}
   	}
    //初始化
    $scope.init1=function(){
    	$scope.seq=window.localStorage.getItem("cseq");
    	var f=$http.get("http://127.0.0.1:8080/Cateringinfo/id/"+$scope.seq).success(function (data) {
                    console.log(data);
               });
        f.success(function(data){
            $scope.catering=data.picturePath;
            //document.getElementById("img1").src = $scope.catering;
        });
    };
    $scope.init1();
    
    $scope.edit=function(){
    	var form = new FormData();
  		var file = document.getElementById("fileUpload").files[0];
  		form.append('fileName', file);
  		$http({
		    method: 'POST',
		    url: 'http://127.0.0.1:8080/Cateringinfo/fileUpload/id/'+$scope.seq,
		    data: form,
		    headers: {'Content-Type': undefined},
		    transformRequest: angular.identity
		}).success(function (data) {
			console.log('upload success');
			window.location.href="catering-picture.html";
		}).error(function (data) {
		    console.log('upload fail');
		})
        
    }
    
    $scope.del=function(){
  		var edata = {"seq":$scope.seq,"picturePath":"http://127.0.0.1:8080/Cateringinfo/fileName/blank.jpg"};
    	var f=$http.put("http://127.0.0.1:8080/Cateringinfo/id/"+$scope.seq,edata).success(function (data) {
                    console.log(data);
               });
        f.success(function(data){
            window.location.href="catering-picture.html";
        });
        
    }
    $scope.goto=function(){
            window.location.href="catering-list.html";
    }
});
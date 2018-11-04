app.controller("controllerPersonal", function(){
	var persinal = "";
	var personais=[];
	
	$scope.cadastrarPersonal = function(){
		$http({
	     	url : 'http://localhost:8080/api/personalT',
	        method : "POST",
	        data : {
	        	'nome' : $scope.txtName,
	        	'cref': $scope.txtCref
	        }
	        }).then(function(response) {
	        	$scope.personal = response.data;
	        	$scope.txtNome= "";
	        	$scope.txtCref= "";
	        }, function(response) {
	            //FAIL CASE
	        });
		personalT.personal= personal;
		 
	}
 
	$scope.mostrarTodosPersonalT = function(){
		$http({
	     		url : 'http://localhost:8080/api/personais',
	     		method : "GET"
	        }).then(function(response) {
	        	$scope.personais = response.data;
	        }, function(response){
		});
	}
	
	$scope.atualizarPersonalT = function(){
		$http({
     		url : 'http://localhost:8080/api/personais',
     		method : "PUT",
     		data: {
     			'id' : personalT.personal.id,
     			'nome' : txtNome,
     			'cref' : txtCrefPersonal
     		}
        	}).then(function(response) {
        	$scope.personal = response.data;
        	}, function(response){
        });
		personalT.personal= personal;
	}
});	

app.controller("controllerAcademia", function($scope, $http){
	var academia = "";
		
	$scope.entrar = function(){
		$http({
	     	url : 'http://localhost:8080/api/academia',
	        method : "GET",
	        data : {
	        	'email': $scope.txtEmail,
	        	'pwd': $scope.TxtPwd
	        }
	        }).then(function(response) {
	        	$scope.academia = response.data;
	        	$scope.txtEmail = "";
	        	$scope.TxtPwd = "";
	        }, function(response) {
	            //FAIL CASE
	        });
		logged.user = academia;
	}
	
	$scope.cadastrarAcademia = function(){
		$http({
	     	url : 'http://localhost:8080/api/academia',
	        method : "POST",
	        data : {
	        	'nome' : $scope.txtName,
	        	'email': $scope.txtEmail,
	        	'endereco': $scope.txtEnder,
	        	'password': $scope.TxtPwd,
	        	'cidade' : $scope.txtCidade + "-" + $scope.txtUf,
	        	'personal' : personalT
	        }
	        }).then(function(response) {
	        	$scope.academia = response.data;
	        	$scope.txtNome= "";
	        	$scope.txtEmail = "";
	        	$scope.txtEndereco = "";
	        	$scope.TxtPwd = "";
	        	$scope.txtCidade = "";
	        }, function(response) {
	            //FAIL CASE
	        });
			logged.user = academia;
	}
});	
//iniciando o angularJS
var app = angular.module("pocketPersonalTrainer", []);

//variaveis
var academia = {};
var persinal = {};
var personais = [];
var cliente = {};
var clientes = [];

//Factories
app.factory("loggedAcademia", function(){
	return{
		userAcademia
	};
});

//controller angular de academias 
app.controller("indexController", function($scope, $http){
		
	$scope.entrar = function(){
		$http({
	     	url : 'http://localhost:8080/pocketPersonalTrainer/academia/login',
	        method : "GET",
	        data : {
	        	'email': $scope.txtEmail,
	        	'pwd': $scope.TxtPwd
	        }
	        }).then(function(response) {
	        	academia = response.data;
	        	$scope.txtEmail = "";
	        	$scope.TxtPwd = "";
	        }, function(response) {
	            //FAIL CASE
	        });
		loggedAcademia.userAcademia = academia;
	}
});

//controller da tela de cadastro.html
app.controller("cadastroController", function($scope, $http){
	$scope.cadastrarPersonal = function(){
		if($scope.frmPersonal.$valid){
			$http({
		     	url : 'http://localhost:8080/pocketPersonalTrainer/personalT',
		        method : "POST",
		        data : {
		        	personal
		        }
		        }).then(function(response) {
					$scope.cancelarAlteracaoPersonal();
					$scope.frmPersonal.$setPristine(true);
		        }, function(response) {
		            //FAIL CASE
		        });
		}else{
			window.alert("Dados inválidos!!");
		} 
	 }
	
	 $scope.cadastrarAcademia = function(){
		if($scope.frmAcademia.$valid){
		 academia.endereco = academia.endereco +", "+cidade+"-"+uf; 
		 $http({
	     	url : 'http://localhost:8080/pocketPersonalTrainer/academia',
	        method : "POST",
	        data : {
	        	academia
	        }
	        }).then(function(response) {
	        	$scope.cancelarCadastroAcademia();
				$scope.frmAcademia.$setPristine(true);
	        }, function(response) {
	            //FAIL CASE
	        });
		}else{
			windw.alert("Dados invalidos!!");
		}
	}
	 $scope.cancelarCadastroAcademia=function (){
			$scope.academia={};
		};
	
});

//controller da pagina UserPage.html
app.controller("userPageController", function($scope, $http){

 $scope.salvaPersonal = function(){
	if($scope.frmPersonal.$valid){
		$http({
	     	url : 'http://localhost:8080/pocketPersonalTrainer/personalT',
	        method : "POST",
	        data : {
	        	personal
	        }
	        }).then(function(response) {
	        	mostrarTodosPersonais();
				$scope.cancelarAlteracaoPersonal();
				$scope.frmPersonal.$setPristine(true);
	        }, function(response) {
	            //FAIL CASE
	        });
	}else{
		window.alert("Dados inválidos!!");
	}
	 
	 
 }

 mostrarTodosPersonaisT = function(){
	$http({
     		url : 'http://localhost:8080/pocketPersonalTrainer/personais',
     		method : "GET"
        }).then(function(response) {
        	$scope.personais = response.data;
        }, function(response){
	});
 }

 $scope.atualizarPersonalT = function(personal){
	personal = angular.copy(personal);
 }
 
 $scope.deletaPersonalT = function(personal){
	 $http({method:'DELETE', url:'http://localhost:8080/pocketPersonalTrainer/deletaPersonalT'+personal.id})
		.then(function (response){
			
			pos = $scope.perosnais.indexOf(personal);
			$scope.personais.splice(pos , 1);
			
		} , function (response){
			console.log(response.data);
			console.log(response.status);
			
		});	
		
 }
 
 $scope.cancelarAlteracaoPersonalT=function (){
		$scope.personal={};
	};
 
//Parte do cliente.js	
 $scope.cadastraCliente = function(){
	 if ($scope.frmCliente.$valid){
	   $http({
	     	url : 'http://localhost:8080/pocketPersonalTrainer/user',
	        method : "POST",
	        data : {
	        	cliente
	        }
	        }).then(function(response) {
	        	carregarClientes();
				$scope.cancelarAlteracaoCliente();
				$scope.frmCliente.$setPristine(true);
	        }, function(response) {
	            //FAIL CASE
	        });
 	}else {
 		window.alert("Dados inválidos!");
 	}
 
 }
 
 mostrarTodosClientes = function(){
	 $http({
  		url : 'http://localhost:8080/pocketPersonalTrainer/clientes',
  		method : "GET"
     }).then(function(response) {
     	$scope.clientes = response.data;
     }, function(response){
	});
 }
 
 $scope.alterarCliente = function(cliente){
	 $scope.cliente = angular.copy(cliente);
	 
 }
 
 $scope.deletaCliente = function(cliente){
	 $http({method:'DELETE', url:'http://localhost:8080/pocketPersonalTrainer/deletaUser/'+cliente.id})
		.then(function (response){
			
			pos = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(pos , 1);
			
		} , function (response){
			console.log(response.data);
			console.log(response.status);
			
		});	
		
 }
 
 $scope.cancelarAlteracaoCliente=function (){
		$scope.cliente={};
	};
 
    generatePw = function(){
	 $scope.textSenhaCli = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
    
    mostrarTodosClientes();
    mostrarTodosPersonaisT();
});	
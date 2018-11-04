var app = angular.module("pocketPersonalTrainer", []);

app.factory("logged", function() {
	return {
		user: ""
	};
});

app.factory("personalT", function(){
	return{
		personal: ""
	};
});
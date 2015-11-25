angular
	.module('myMod')
	.directive('login', function(){
  
	  return{
 	   restrict: "E",
 	   template: "<div>I'm a form</div>",
 	   replace: true
  };
});
angular
	.module('myMod')
	.directive('rules', function(){
  
	  return{
 	   restrict: "E",
 	   template: "<div>I'm the rules</div>",
 	   replace: true
  };
});
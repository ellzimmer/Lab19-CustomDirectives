angular
	.module('myMod')
	.directive('rules', function(){
  
	  return{
 	   restrict: "EA",
 	   template: "<h1>I'm the rules</h1>",
 	   replace: false
  };
});
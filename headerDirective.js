angular
	.module('myMod')
	.directive('masthead', function(){
  
	  return{
 	   restrict: "EA",
 	   template: "<header>I'm the masthead</header>",
 	   replace: false
  };
});
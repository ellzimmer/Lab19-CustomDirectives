angular
	.module('myMod')
	.directive('login', function(){
  
	  return{
 	   restrict: "EA",
 	   template: "<form>I'm a form</form>",
 	   replace: false
  };
});
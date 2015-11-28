angular
	.module('myMod')
	.directive('login', function(){
  
	  return{
 	   restrict: "E",
 	   template: "<form>Sign-in<p><input type='text'placeholder='email'/><p><input type='text' placeholder='password'/></form>",
 	   replace: true
  };
});
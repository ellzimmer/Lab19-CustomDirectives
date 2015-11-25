angular
	.module('myMod')
	.directive('navdir', function(){
  
	  return{
 	   restrict: "E",
 	   template: "<button>{{post.a}}</button>",
 	   replace: true
  };
});
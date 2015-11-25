angular
	.module('myMod')
	.directive('navdir', function(){
  
	  return{
 	   restrict: "EA",
 	   template: "<button>{{post.a}}</button>",
 	   replace: false
  };
});
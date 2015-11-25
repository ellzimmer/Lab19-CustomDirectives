angular
	.module('myMod')
	.directive('postsdir', function(){
  
	  return{
 	   restrict: "EA",
 	   template: "<p>{{post.a}}</p>",
 	   replace: false
  };
});
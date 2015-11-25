angular
	.module('myMod')
	.directive('postsdir', function(){
  
	  return{
 	   restrict: "E",
 	   template: "<div>{{post.a}}</div>",
 	   replace: true
  };
});
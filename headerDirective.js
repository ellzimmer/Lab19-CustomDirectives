angular
	.module('myMod')
	.directive('masthead', function(){
		return{
 	   		restrict: "E",
 	   		template: "<div>I'm the masthead</div>",
 	   		replace: true
  		};
});
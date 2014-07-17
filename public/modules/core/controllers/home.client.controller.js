'use strict';


angular.module('core').controller('HomeController', function($scope) {
	$('a.postlink').click(function() {
		alert("Alert");
	});
});
"use strict";

angular.module("angular-bootstrap-radio-test", ["ui.radio"]).controller("index", function($scope) {
	$scope.radioModel = [
		"", "second", "third", "fourth", "top", "left"
	];

	$scope.changes = 0;
	$scope.onChange = function() {
		$scope.changes++;
	};

	$scope.isDisabled = false;

  $scope.faConfig = {
    iconClass: 'fa fa-circle'
  };

});
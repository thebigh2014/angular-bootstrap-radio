'use strict';

angular.module('ui.radio', [])
.constant('uiRadioConfig', {
	iconClass: 'fa fa-circle',
	buttonClass: 'btn btn-default btn-xs',
})
.directive('radio', ['uiRadioConfig', function(uiRadioConfig) {
	return {
		scope: {
			config: '=?'
		},
		require: 'ngModel',
		restrict: 'EA',
		replace: 'true',
		template: '<a class="ui-radio" ng-class="options.buttonClass"><i ng-show="checked" ng-class="options.iconClass"></i></a>',
		link: function(scope, elem, attrs, modelCtrl) {

			scope.options = angular.extend({}, uiRadioConfig, scope.config);
			var value;

			// If defined, set value from scope
			if (attrs.ngValue !== undefined) {
				value = scope[attrs.ngValue];
			} else {
				value = attrs.value;
			}

			// Check if name attribute is set and if so add it to the DOM element
			if(scope.name !== undefined) {
				elem.name = scope.name;
			}

			// Update element when model changes
			scope.$watch(function() {
				if (modelCtrl.$modelValue === value) {
					modelCtrl.$setViewValue(value);
				}

				return modelCtrl.$modelValue;
			}, function(newVal, oldVal) {
				scope.checked = modelCtrl.$modelValue === value;
			}, true);

			// On click swap value and trigger onChange function
			elem.bind('click', function() {
				scope.$apply(function() {
					if(modelCtrl.$modelValue !== value) {
						modelCtrl.$setViewValue(value);
					}
				});
			});
		}
	};
}]);

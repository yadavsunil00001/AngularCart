angular.module('cartApp',['ngRoute'])
	.controller("MainController",["$http","$scope",function($http,$scope){

		$scope.$on('$viewContentLoaded', function(){
			$('.dropdown-button').dropdown({
		      inDuration: 300,
		      outDuration: 225,
		      constrain_width: false, // Does not change width of dropdown to that of the activator
		      hover: true, // Activate on hover
		      gutter: 0, // Spacing from edge
		      belowOrigin: true, // Displays dropdown below the button
		      alignment: 'left' // Displays dropdown with edge aligned to the left of button
		    });

		    $('.button-collapse').sideNav({
		      menuWidth: 300, // Default is 240
		      edge: 'left', // Choose the horizontal origin
		      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		    });
		});

		$scope.cart = [];
		$scope.total =  0;

		$scope.remove = function(index){
			$scope.total -= $scope.cart[index].qty*$scope.cart[index].seltype.price;
			$scope.cart.splice(index,1);
		};

	}])
	.directive('navBar', function() {
		return {
			restrict: 'E',
			scope :false,
	    templateUrl: '/views/elements/nav-bar.html',
	  };
	});



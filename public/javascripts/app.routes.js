angular.module('cartApp')
.config(function ($routeProvider) {

	$routeProvider

	.when('/products', {

		templateUrl: '/views/pages/products/products.html',
		controller: "productsController"
	})
	
	.otherwise({ redirectTo: '/products' })
});


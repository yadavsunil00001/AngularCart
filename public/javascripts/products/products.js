angular.module('cartApp')
	.controller("productsController",["$scope",function($scope){
		$scope.products = [
			{ 	"id" : 1 ,
				"name" : "Real Juice Guava",
				"img" : "/images/guava.jpg",
				"type" : [{"volume" : "1.0 Lt", "MRP" : 99 , "price" : 95},{"volume" : "200 ml", "MRP" : 20 , "price" : 19}]
			},
			{ 	"id" : 2 ,
				"name" : "Real Juice Litchi",
				"img" : "/images/litchi.jpg",
				"type" : [{"volume" : "1.0 Lt", "MRP" : 100 , "price" : 98},{"volume" : "200 ml", "MRP" : 20 , "price" : 20}]
			},
			{ 	"id" : 3 ,
				"name" : "Real Juice Orange",
				"img" : "/images/orange.jpg",
				"type" : [{"volume" : "1.0 Lt", "MRP" : 105 , "price" : 100},{"volume" : "200 ml", "MRP" : 20 , "price" : 19}]
			},
			{ 	"id" : 4 ,
				"name" : "Real Juice Mixed",
				"img" : "/images/mixed.jpg",
				"type" : [{"volume" : "1.0 Lt", "MRP" : 102 , "price" : 99},{"volume" : "200 ml", "MRP" : 20 , "price" : 18}]
			}
		];

		$scope.Qty = 1;
		$scope.selType ;
		$scope.addToCart = function(index,id,seltype,qty,name,img){
			var len = $scope.$parent.cart.length;
			var i;
			for(i = 0; i < len ;i++){
				if( $scope.$parent.cart[i]["id"] == id && $scope.$parent.cart[i]["seltype"] == seltype){
					$scope.$parent.cart[i]["qty"] += qty;
					$scope.$parent.total += qty*seltype.price; 
					break;
				}
			}
			if( i === len ){
				$scope.$parent.cart.push({"id" : id ,"name" : name,"seltype" : seltype , "qty" : qty ,"img" :img})
				$scope.$parent.total += qty*seltype.price; 
			}


			var x = '.add-to-cart-'+index;
			var element = angular.element($(x));

		 	var cart = angular.element($('.shopping-cart'));
	    var imgElem = angular.element($('.img-'+index));
			var card = angular.element($('.card-'+index));
	    var offsetTopCart = cart.prop('offsetTop');
      var offsetLeftCart = cart.prop('offsetLeft');
      var widthCart = cart.prop('offsetWidth');
      var heightCart = cart.prop('offsetHeight');
      var parentElem = angular.element($('body'));
      var offsetLeft = card.prop("offsetLeft")+100;
      var offsetTop = card.prop("offsetTop")+150;
      var imgSrc = imgElem.prop('currentSrc');
      // console.log(offsetLeft + ' ' + offsetTop + ' ' + imgSrc);
      var imgClone = angular.element('<img src="' + imgSrc + '"/>');
      imgClone.css({
        'height': '150px',
        'position': 'absolute',
        'top': offsetTop + 'px',
        'left': offsetLeft + 'px',
        'opacity': 1,
        'border' : 'solid 1px grey'
      });
      imgClone.addClass('animate');
      parentElem.append(imgClone);
      setTimeout(function () {
        imgClone.css({
          'height': '75px',
          'top': (offsetTopCart+heightCart/2)+'px',
          'left': (offsetLeftCart+widthCart/2)+'px',
          'opacity': 1,
        	'border' : 'solid 1px grey'
        });
      }, 500);
      setTimeout(function () {
        imgClone.css({
          'height': 0,
          'opacity': 1,
        	'border' : 'solid 1px grey'
        });
        cart.addClass('shake');
      }, 1000);
      setTimeout(function () {
        cart.removeClass('shake');
        imgClone.remove();
      }, 1500);
		};

	}]);

<<<<<<< HEAD
angular.module('OWMApp', ['ngRoute'])
    .value('owmCities',
        ['New York', 'Dallas', 'Chicago'])
	.config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: './home.html',
            controller : 'HomeCtrl'
        })
        .when('/cities/:city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl',
            resolve : {
                city: function(owmCities, $route, $location) {
                    var city = $route.current.params.city;
                    if(owmCities.indexOf(city) == -1 ) {
                        $location.path('/error');
                        return;
=======
angular.module('owmApp', ['ngRoute', 'ngAnimate'])
    .value('ownCities',['New York', 'Dallas', 'Chicago'])

    .controller('HomeCtrl', function($scope) {
        //empty for now
    })

    .config(function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'HomeCtrl'
        }).when('/cities/:city', {
            templateUrl : 'city.html',
            controller : 'CityCtrl',
            resolve: {
                city : function(ownCities, $route, $location) {
                    var city = $route.current.params.city;
                    if(ownCities.indexOf(city) == -1) {
                        throw new Error("City not found");
>>>>>>> a0cca4da4a3adb22a0f52f23e6ea24c25b420713
                    }
                    return city;
                }
            }
        })
<<<<<<< HEAD
        .when('/error', {
		      template : '<p>Error Page Not Found</p>'
		});
    })
    .controller('HomeCtrl', function($scope) {
        //empty for now
    })
    .controller('CityCtrl', function($scope, city) {
   		$scope.city = city;
	});
=======
            .when('/error', {
                template : 'Error Page Not Found'
            })
            .otherwise({
                redirectTo : '/error'
            });
    })

    .controller('CityCtrl', function($scope, city) {
        $scope.city = city;
    })

    .run(function($rootScope, $location, $timeout) {
        $rootScope.$on('$routeChangeError', function() {
            $location.path("/error");
        });
        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.isLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function() {
            $timeout(function() {
                $rootScope.isLoading = false;
            }, 1000);
        });
    });
>>>>>>> a0cca4da4a3adb22a0f52f23e6ea24c25b420713

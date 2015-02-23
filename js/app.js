var app = angular.module('CalendarApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'DayController',
			templateUrl: 'views/day.html'
		});
		.otherwise({
			redirectTo: '/'
		});
});

// In app.js, define the app's routes:
// Use app.config() and $routeProvider to set up the routes.
// Map the URL / to the controller DayController and the template views/day.html. We'll write these next.
// Otherwise, redirect to /


// Example

// var app = angular.module('GalleryApp', ['ngRoute']);

// app.config(function ($routeProvider) {
// 	$routeProvider
// 		.when('/', {
// 			controller: 'HomeController',
// 			templateUrl: 'views/home.html'
// 		})
// 		.when('/photos/:id', {
// 			controller: 'PhotoController',
// 			templateUrl: 'views/photo.html'
// 		})
// 		.otherwise({
// 			redirectTo: '/'
// 		});
// });
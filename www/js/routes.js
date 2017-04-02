angular.module('app.routes', []).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('family', {
      url: '/family',
      templateUrl: 'templates/family.html',
      controller: 'familyCtrl'
    })

    .state('invoice', {
      url: '/invoice/:familyId',
      templateUrl: 'templates/invoice.html',
      controller: 'invoiceCtrl'
    })

    $urlRouterProvider.otherwise('/login')

});

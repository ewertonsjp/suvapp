angular.module('app.routes', []).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

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

    .state('transaction', {
      url: '/transaction/create',
      templateUrl: 'templates/transaction.html',
      controller: 'transactionCtrl'
    })

    $urlRouterProvider.otherwise('/family')

});

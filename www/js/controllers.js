angular.module('app.controllers', [])

.controller('invoiceCtrl', ['$scope', '$stateParams', 'InvoiceService', function ($scope, $stateParams, InvoiceService) {
  InvoiceService.get().then(function(invoice) {
      $scope.invoice = invoice;
  });
}])

.controller('transactionCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])

.controller('familyCtrl', ['$scope', '$stateParams', 'FamilyService', function ($scope, $stateParams, FamilyService) {
  FamilyService.list().then(function(families) {
      $scope.families = families;
  });
}])

angular.module('app.controllers', [])

.controller('invoiceCtrl', ['$scope', '$stateParams', 'InvoiceService', 'TransactionService', '$ionicLoading', '$ionicModal', function ($scope, $stateParams, InvoiceService, TransactionService, $ionicLoading, $ionicModal) {
  var familyId = $stateParams.familyId;

  $scope.showLoading = function() {
  	$ionicLoading.show()
  };
  $scope.hideLoading = function(){
  	$ionicLoading.hide();
  };

  $scope.update = function() {
      $scope.showLoading();
      InvoiceService.get(familyId).then(function(invoice) {
          $scope.invoice = invoice;
          $scope.hideLoading();
      });
      $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.update();

  $scope.addTransaction = function(transaction){
    TransactionService.add(transaction).then(function(response){
      $scope.update();
    });
    $scope.hideTransactionModal();
  }

  /*#### MODAL ######*/

  $ionicModal.fromTemplateUrl('modal-template.html', function(modal) {
    $scope.transactionModal = modal;
  }, {
    scope: $scope
  });

  $scope.showTransactionModal = function(){
    $scope.transactionModal.show();
  }

  $scope.hideTransactionModal = function(){
    $scope.transactionModal.hide();
  }

}])

.controller('familyCtrl', ['$scope', '$stateParams', 'FamilyService', function ($scope, $stateParams, FamilyService) {
  FamilyService.list().then(function(families) {
      $scope.families = families;
  });
}])

angular.module('app.controllers', [])

.controller('invoiceCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
  $scope.invoice = [];
  $scope.invoice['compet'] = 'Abr2017';
  $scope.invoice['valorTotal'] = 300.00;

  $scope.invoice.transactions = [];
  var tx1 = [];
  tx1['description'] = 'TESTE';
  tx1['amount'] = 30;
  $scope.invoice.transactions.push(tx1);

  $scope.invoice.payments = [];
  var user = [];
  user['name'] = 'ZE';

  var pay1 = [];
  pay1['user'] = user;
  pay1['amount'] = 30;
  $scope.invoice.payments.push(pay1);
}])

.controller('transactionCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])

.controller('familyCtrl', ['$scope', '$stateParams', 'FamilyService', function ($scope, $stateParams, FamilyService) {
  //this.families = FamilyService.list();
  $scope.families = [];

  var family1 = []
  family1['id'] = '1';
  family1['code'] = '9999';
  family1['name'] = 'APT PLT';
  family1['description'] = 'APT dos miseráveis de PAULISTANA-PI!';

  var family2 = []
  family2['id'] = '2';
  family2['code'] = '6666';
  family2['name'] = 'SPOTIFY';
  family2['description'] = 'Conta dos SPOTIFY que o estagiário é sempre chutado!';

  $scope.families.push(family1);
  $scope.families.push(family2);
}])

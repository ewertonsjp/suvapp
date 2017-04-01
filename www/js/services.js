angular.module('app.services', [])

.factory('BlankFactory', [function() {

}])

.service('FamilyService', ['$http', function($http) {

  return {
      list: function() {
        return $http.get("http://localhost:8100/api_family/").then(function(response) {
          return response.data;
        }).catch(function(response){
          
        });
      }
  }

}])

.service('InvoiceService', ['$http', function($http) {

  return {
      get: function(familyId) {
        return $http.get("http://localhost:8100/api_invoice?familyId=" + familyId).then(function(response) {
          return response.data;
        }).catch(function(response){

        });
      }
  }

}])

.service('TransactionService', ['$http', function($http) {

  return {
      add: function(transaction) {
        body = {
          transaction: {
            description: transaction.description,
            amount: transaction.amount,
            invoice_id: 1
          }
        }

        return $http.post("http://localhost:8100/api_transaction/", body).then(function(response) {
          return response;
        }).catch(function(response){

        });
      }
  }

}]);

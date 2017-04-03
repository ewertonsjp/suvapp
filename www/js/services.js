angular.module('app.services', [])

.factory('BlankFactory', [function() {

}])

.service('FamilyService', ['$http', function($http) {

  return {
      list: function($userId) {
        return $http.get("http://localhost:8100/api_family?userId="+$userId).then(function(response) {
          return response.data;
        }).catch(function(response){

        });
      }
  }

}])

.service('InvoiceService', ['$http', function($http) {

  return {
      get: function(familyId) {
        return $http.get("http://localhost:8100/api_invoice/listAsJson?familyId=" + familyId).then(function(response) {
          return response.data;
        }).catch(function(response){

        });
      },

      close: function(invoice) {
        body = {
          invoiceId: invoice.id
        }

        return $http.post("http://localhost:8100/api_invoice/", body).then(function(response) {
          console.log(response);
          return response;
        }).catch(function(response){
          console.log(response);
        });
      }
  }

}])

.service('TransactionService', ['$http', function($http) {

  return {
      add: function(invoice, transaction) {
        body = {
          transaction: {
            description: transaction.description,
            amount: transaction.amount,
            invoice_id: invoice.id
          }
        }

        return $http.post("http://localhost:8100/api_transaction/", body).then(function(response) {
          return response;
        }).catch(function(response){
          console.log(response);
        });
      }
  }

}]);

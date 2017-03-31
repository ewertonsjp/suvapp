angular.module('app.services', [])

.factory('BlankFactory', [function() {

}])

.service('FamilyService', ['$http', function($http) {

  URL = "http://localhost:8100/api_family/";

  return {
      list: function() {
        return $http.get(URL).then(function(response) {
          return response.data;
        }).catch(function(response){
          console.log("Fuck");
        });
      },
  }

}])

.service('InvoiceService', ['$http', function($http) {

  URL = "http://localhost:8100/api_invoice?familyId=";

  return {
      get: function(familyId) {
        return $http.get(URL + familyId).then(function(response) {
          return response.data;
        }).catch(function(response){
          console.log("ERROR");
        });
      }
  }

}]);

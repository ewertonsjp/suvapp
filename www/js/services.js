angular.module('app.services', [])

.factory('BlankFactory', [function(){

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

      // add: function(avaliacao) {
      //   body = {
      //     avaliacao: {
      //       nome: avaliacao.nome,
      //       estrelas: avaliacao.estrelas,
      //       comentario: avaliacao.comentario
      //     }
      //   }
      //
      //   return $http.post(URL, body).then(function(response) {
      //     return response;
      //   }).catch(function(response){
      //     return response;
      //   });
      //
      // },
      //
      // delete: function(id) {
      //
      // }
  }

}])

.service('InvoiceService', ['$http', function($http) {

  URL = "http://localhost:8100/api_invoice/";

  return {
      get: function() {
        return $http.get(URL).then(function(response) {
          return response.data;
        }).catch(function(response){
          console.log("ERROR");
        });
      }
  }
}]);

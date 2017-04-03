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

  $scope.addTransaction = function(invoice, transaction){
    TransactionService.add(invoice, transaction).then(function(response){
      $scope.update();
    });
    $scope.hideTransactionModal();
  }

  $scope.closeInvoice = function(invoice) {
    InvoiceService.close(invoice).then(function(response){
      $scope.update();
    });
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

.controller('familyCtrl', ['$scope', '$stateParams', 'FamilyService', '$ionicUser', '$ionicAuth', function ($scope, $stateParams, FamilyService, $ionicUser, $ionicAuth) {
  console.log($ionicAuth.isAuthenticated());
  FamilyService.list($ionicUser.id).then(function(families) {
      $scope.families = families;
  });
}])

.controller('loginCtrl', ['$scope', '$state', '$stateParams', '$ionicLoading', '$ionicPopup', '$ionicAuth', '$ionicUser', '$ionicPush', function ($scope, $state,  $stateParams, $ionicLoading, $ionicPopup, $ionicAuth, $ionicUser, $ionicPush) {

	/* LOADING FUNCTION */
	$scope.showLoading = function() {
		$ionicLoading.show()
	};

  $scope.hideLoading = function(){
		$ionicLoading.hide();
	};
	/* END - LOADING FUNCTION */

	$scope.logar = function(usuario) {

		if(usuario == null || usuario.email == null || usuario.senha == null) {
			var alertPopup = $ionicPopup.alert({title: 'Coisas primeiras primeiro',template: 'Preencha todos os campos!'});
      alertPopup.then(function(res){});
			return;
		}

		console.log("logar > user: ", usuario);
		var details = {'email': usuario.email,'password': usuario.senha};

		$scope.showLoading();
		$ionicAuth.login('basic', details, {'remember': false}).then(function() {
			$state.go('family');
			$scope.hideLoading();

			/*#### PUSH register ######*/
			// $ionicPush.register().then(function(t) {
			//   return $ionicPush.saveToken(t);
			// }).then(function(t) {
			//   console.log('Token saved:', t.token);
			// });
		}).catch(function(response){
      $scope.hideLoading();
      console.log(response);
    });

	}

	$scope.criarConta = function(usuario) {

		if(usuario == null || usuario.username == null || usuario.email == null || usuario.senha == null) {
			var alertPopup = $ionicPopup.alert({title: 'Coisas primeiras primeiro',template: 'Preencha todos os campos!'});
			alertPopup.then(function(res){});
			return;
		}

		$scope.showLoading();
		console.log("criarConta > user: ", usuario);

		var gravatarImage = "https://www.gravatar.com/avatar/" + md5(usuario.email);
		var details = {'email': usuario.email,'password': usuario.senha,'username': usuario.username,'image': gravatarImage};

		$ionicAuth.signup(details).then(function() {
		  alert("Usuário cadastrado com sucesso!");
		  $scope.createAccount = false;
		  $state.go('family');
		  $scope.hideLoading();
		}, function(err) {
			for (var e of err.details) {
				if (e === 'conflict_email') {
					alert('Email já cadastrado.');
				} else if (e === 'conflict_username') {
					alert('Nome de usuário já cadastrado.');
				} else if (e === 'invalid_email') {
					alert('Email inválido.');
				} else {
					alert("Algo errado não deu certo! Tente novamente.");
				}
			}
			$scope.hideLoading();
		});

	}

}])

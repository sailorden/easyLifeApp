/**
 * Created by Demax on 11/09/2015.
 */
angular.module('communication.user.controllers', [])

  .controller('CommunicationCtrl', function($scope,$log, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);


  })

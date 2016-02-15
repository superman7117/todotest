'use strict';

var app = angular.module("theApp", ['ui-router']);

app.controller('mainControl', ['$scope','$https' function($scope, $https){
  $scope.listItems;
  $scope.checkItOut = function(){
    $https.get()
    .then(function(listItems){
      
    })
  }

  $scope.newListItem = function(){
    var newListItem = $scope.listItem
    $https.post('/users/new', {listItem: newListItem})
    .then(checkItOut())
  }

}])

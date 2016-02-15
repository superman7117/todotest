'use strict';

var app = angular.module("theApp", ['ui-router']);

app.controller('mainControl', ['$scope','$https' function($scope, $https){
  $scope.newListItem = function(){
    var newListItem = $scope.listItem
    $https.post('/users/new', {listItem: newListItem})
  }
}])

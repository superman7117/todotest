'use strict';

var app = angular.module("theApp", ['ui-router']);

app.controller('mainControl', ['$scope','$https' function($scope, $https){
  $scope.listItems;
  checkItOut()
  $scope.checkItOut = function(){
    $https.get('/users/getAll')
    .then(function(listItems){
      $scope.listItems = listItems
    })
  }

  $scope.newListItem = function(){
    var newListItem = $scope.listItem
    $https.post('/users/new', {listItem: newListItem})
    .then(checkItOut())
  }
var counter =1;
  $scope.sorter = function(){
    if(counter === 1){
      counter =2;
      
    }
  }
}])

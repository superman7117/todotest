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
$scope.orderbythis;
  $scope.sorter = function(){
    if(counter === 1){
      counter =2;
      $scope.orderbythis = 'listItem'
    }
    else {
      counter = 1
      $scope.orderbythis= '-listItem'
    }
  }

  $scope.delete = function(){
    var listId = this.closest('row').attr('id')
    $https.post('/users/delete', {_id: listId})
    .then(checkItOut())
  }

  $scope.edit = function(){
    var newListItem = $scope.listItem;
    var listId = this.closest('row').attr('id')
    $https.post('/users/edit', {_id: listId,listItem: newListItem})
    .then(checkItOut())
  }
}])

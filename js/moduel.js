'use strict';

var app = angular.module("theApp", ['ui-router']);

app.config(function($stateProvider, $urlRouteProvider){
  $stateProvider
  .state()
  $urlRouteProvider.otherwise("/")
})

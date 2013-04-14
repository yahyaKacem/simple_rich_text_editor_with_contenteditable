'use strict';
//########################################################################
var app = angular.module('plunker', []);
//########################################################################
//######injecting the dependencies########################################
controllers.MainCtrl.$inject = ['$scope', '$document'];
//########################################################################
//###assigning the controllers & the direcitves to the application########
app.directive(directives);
app.controller(controllers);
//########################################################################

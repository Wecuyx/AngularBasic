//modules used to associate angularjs app to html
var app3 = angular.module('app3',[]);

//scope is to link data to html
app3.controller('gListCtrl', function($scope){
  $scope.groceries =[
    {item:"tomatoes", purchased: false},
    {item:"Ramen", purchased: false},
    {item:"Potato", purchased: false},
    {item:"Apple", purchased: false},
  ];

  $scope.getList = function(){
    // ? means if true, first value, : else the other
    return $scope.showList ? "ulgroceriesList.html" : "groceriesList.html"
  }
});

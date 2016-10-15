/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myApp = angular.module('myApp', ['ngRoute']);

var personArr = [
            {id: 1, name: "Jens", age: 18}
            , {id: 2, name: "Peter", age: 23}
            , {id: 3, name: "Hanne", age: 23}
        ];
        
myApp.controller('pController', function ($scope, $routeParams) {
        
        
       
        $scope.persons = personArr;
        
        $scope.selectedPerson = personArr[$routeParams.id - 1];
        
        $scope.addPerson = function(){
            $scope.selectedPerson.id = personArr.length + 1;
            
            personArr.push($scope.selectedPerson);
            
            $scope.selectedPerson = {};
            
            alert("You just made a new person!");
        };

       
    });

            myApp.config(function ($routeProvider) {
               
               $routeProvider
                        .when('/persons', {
                            templateUrl: 'persons.html',
                            controller: 'pController'
                        })
                        .when('/pDetails/:id', {
                            templateUrl: 'pDetails.html',
                            controller: 'pController'
                        })
                        .when('/new', {
                            templateUrl: "newPerson.html",
                            controller: "pController"
                        })
                         .otherwise({
                                    redirectTo: "/home"
                        });
                        
                        
           
});





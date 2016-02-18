var app = angular.module('myApp', []);

app.factory('dictionaryService', function($http){
  return {

    getDefinition: function(word){
      return $http.get('http://api.wordnik.com:80/v4/word.json/'+word+'/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(function(result) {
        return result.data;
      });
    }
  }
});

app.controller('mainCtrl', function($scope, dictionaryService, $timeout) {

  $scope.word = '';
  $scope.words = [];

  var timer=false;
  $scope.$watch('word', function(){

    if(timer){
        $timeout.cancel(timer)
    }  
    timer = $timeout(function(){
        if ($scope.word.length > 1){

          $("#spinner").html('<i style="margin-top: 20px;" class="fa fa-spinner fa-spin fa-4x"></i>');

          dictionaryService.getDefinition($scope.word).then(function(data) {
            $("#spinner").html('');
            if (data == 'If you are interested in using DictionaryAPI for bulk transactions, please contact us at info@DictionaryAPI.net to purchase a license'){
              $('#message').show();
            }
            $scope.words = data;
          });
        }
     }, 800) // delay after typing
  });

});

$(document).ready(function(){
  $("input").focus();
});
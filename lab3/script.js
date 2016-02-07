angular.module('app', []).controller('mainCtrl', mainCtrl).directive('avatar', avatarDirective);

function mainCtrl ($scope) {
  
	$scope.users = [];

  $scope.addNew = function (user) {
    $scope.users.push({ 
      name: user.name,
      avatarUrl: user.url
    }); 
    
    user.name = '';
    user.url = '';

  };
}

function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E', // only matches element name
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h4>{{user.name}}</h4>' +
      '</div>'
    ),
    link: link
  };
  
  function link (scope) {
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'avatars/android.jpg';
    }
  }

}
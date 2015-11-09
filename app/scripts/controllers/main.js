'use strict';

angular.module('phleepApp')
  .controller('MainCtrl', function ($scope, localStorageService) 
  {

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });

  MainCtrl.$inject = ['UserService', '$rootScope'];
    function MainCtrl(UserService, $rootScope) 
    {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() 
        {
            loadCurrentUser();
          }
        };
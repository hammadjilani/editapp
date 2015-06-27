

myApp.controller('myCtrl', function ($scope,myService) {
    $scope.contacts=myService.list();
    $scope.saveTask= function () {
        myService.save($scope.newcontact);
        $scope.newcontact={};
    };
    $scope.delete = function (id) {

        myService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    };
    $scope.edit=function(id){
        $scope.newcontact=angular.copy(myService.edit(id))
    }
});


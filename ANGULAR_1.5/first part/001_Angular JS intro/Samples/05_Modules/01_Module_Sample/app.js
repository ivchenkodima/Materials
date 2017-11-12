var customModule = angular.module('customModule', []);


customModule.controller('petCtrl', function ($scope) {
    //$scope содержит данные модели. Это связующее звено между контроллером и видом.
    //$scope всего лишь один из сервисов, внедренных в контроллер.
    $scope.pets = [
        { name: "Lucky", animal: "Dog" },
        { name: "Lucy", animal: "Cat" }
    ];
});
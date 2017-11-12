angular.module("studyModule", ["ngResource", "ngRoute"])
.constant("baseUrl", "http://localhost:2403/data/")
.config(function ($routeProvider) {    
    //сервис $routeProvider используется управления путями в приложении
    $routeProvider.when("/list", {
        templateUrl: "/Lesson_8/05_services_for_views/01/tableView.html"
    });

    $routeProvider.when("/edit", {
        templateUrl: "/Lesson_8/05_services_for_views/01/editorView.html"
    });

    $routeProvider.when("/create", {
        templateUrl: "/Lesson_8/05_services_for_views/01/editorView.html"
    });

    $routeProvider.otherwise({
        templateUrl: "/Lesson_8/05_services_for_views/01/tableView.html"
    });
})
.controller("studyCtrl", function ($scope, $http, $resource, $location, baseUrl) {    

    $scope.currentProduct = null;

    $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" });    

    $scope.listProducts = function () {
        $scope.products = $scope.productsResource.query();        
    }

    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {            
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
        
        $location.path("/list");
    }

    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$save().then(function (newProduct) {
            $scope.products.push(newProduct);
            $location.path("/list");
        });
    }

    $scope.updateProduct = function (product) {
        product.$save();
        $location.path("/list");
    }

    $scope.editProduct = function (product) {
        $scope.currentProduct = product;
        $location.path("/edit");
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }

        $scope.currentProduct = {};
    }

    $scope.cancelEdit = function () {
        if ($scope.currentProduct && $scope.currentProduct.$get) {
            $scope.currentProduct.$get();
        }
        $scope.currentProduct = {};
        $location.path("/list");
    }
    $scope.listProducts();
})
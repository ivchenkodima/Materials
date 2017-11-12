angular.module("studyModule")
// $scope.showResolved = function (value) {
            //     if($scope.modelvalue == false) return value;
            //     return value.resolved == true ? value : false;
            // };
.filter("showResolved", function () {
    return function (value) {
        if($scope.modelvalue == false) return value;
        return value.resolved == true ? value : false;
    }
});
//фильтр skipItems предназначен для того чтобы пропустить несколько элементов для отображения из массива данных,
//в нем присутствует проверка isArray которая проверяет чтобы аргумент был массивом и isNumber которая проверяет что массив не пустой
//далле после успешного прохождения проверок к массиву данных применяется JavaScript функция slice 
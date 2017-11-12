function ListCtrl($scope) {
    
    $scope.items = [
      { text: 'Chocolate', done: true },
      { text: 'Potato', done: false },
      { text: 'Banana', done: false },
      { text: 'Water', done: true }
    ];
 
    $scope.addItem = function () {
        $scope.items.push({
            text: $scope.itemText,
            done: false 
        });
        $scope.itemText = '';
    };
    $scope.remain = function () {
        var count = $scope.items.length;

        angular.forEach($scope.items, function(item) {
            count -= item.done;
        });
        return count;
    };
}
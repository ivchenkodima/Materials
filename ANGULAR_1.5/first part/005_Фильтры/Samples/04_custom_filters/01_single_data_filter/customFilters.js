angular.module("studyModule")
.filter("changeCase", function () {
    return function (value, isReverse) {
        if (angular.isString(value)) {
            var processedValue = isReverse ? value.toUpperCase() : value.toLowerCase();
            return (isReverse ? processedValue[0].toLowerCase() : processedValue[0].toUpperCase()) + processedValue.substr(1);
        } else {
            return value;
        }
    };
});
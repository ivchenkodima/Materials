angular.module("additionalModule", [])    
.directive("triButton", function () {
    return {
        scope: { counter: "=counter" },
        link: function (scope, element, attrs) {
            element.on("click", function (event) {
                console.log("Button click: " + event.target.innerText);
                scope.$apply(function () {
                    scope.counter++;;
                });
            });
        }
    }
});
angular.module("customServices", [])
.factory("logService", function () {
    var messageCount = 0;
    return {
        log: function (msg) {
            console.log("(LOG + " + messageCount++ + ") " + msg);
        },
        newlog: function(msg) {
            alert(msg);
        }
    };
});
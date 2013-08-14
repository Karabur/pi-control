'use strict';
var MainCtrl = (function () {
    function MainCtrl($scope) {
        $scope.awesomeThings = this.getList();
    }
    MainCtrl.prototype.getList = function () {
        return [
            'AngularJS',
            'Karma'
        ];
    };
    MainCtrl.$inject = ['$scope'];
    return MainCtrl;
})();

angular.module('controllers').controller('MainCtrl', MainCtrl);
//@ sourceMappingURL=main.js.map

'use strict';


class MainCtrl {
    static $inject = ['$scope'];
    constructor ($scope) {
            $scope.awesomeThings = this.getList();
    }

    getList() {
        return [
            'AngularJS',
            'Karma'
        ]
    }
}

angular.module('controllers').controller('MainCtrl', MainCtrl);

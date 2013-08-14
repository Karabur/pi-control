class DevList {
    static $inject = ['$scope', 'Restangular'];
    devices;

    constructor ($scope, Restangular) {
        this.devices = Restangular.all('devices');
        $scope.devices = this.devices.getList();
    }
}

angular.module('controllers').controller('MainCtrl', MainCtrl);

'use strict';

module.exports = {
    getDevices: function (req, res) {
        var list = [{addr:33}];
        res.json(list);
    }
};
'use strict';

var PORT = 9000;

var express = require('express'),
    expressApp = express();
var path = require('path');

var cors = function (req, res, next) {
    var oneof = false;
    if (req.headers.origin) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        oneof = true;
    }
    if (req.headers['access-control-request-method']) {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
        oneof = true;
    }
    if (req.headers['access-control-request-headers']) {
        res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
        oneof = true;
    }
    if (oneof) {
        res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
    }

    // intercept OPTIONS method
    if (oneof && req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
};
var indexmw = function (indexPath) {
    return function (req, res) {
        console.log(req.url);
        res.sendfile(indexPath);
    }
};


expressApp.use(cors);
expressApp.use(express.static(path.resolve('../app')));
expressApp.use(indexmw(path.resolve('../app/index.html')));

expressApp.listen(PORT);
console.log('Listening on port ' + PORT);
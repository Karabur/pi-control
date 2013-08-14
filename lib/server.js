'use strict';

var express = require("express"),
    app = express(),
    port = 4567,
    commands = require('./commands.js');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
};

//noinspection JSValidateTypes
app.configure(function () {
    app.use(allowCrossDomain);
    app.use(function (req, res, next) {
        console.log('%s %s', req.method, req.url);
        next();
    });
    app.use(express.bodyParser());
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
//    app.use(app.router);
});

app.get('/control/devices', commands.getDevices);


app.listen(port);
console.log('Server started on port ' + port + ' ...');
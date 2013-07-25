'use strict';

var express = require("express"),
    app = express(),
    port = 4567,
    path = require('path');

app.get("/", function (req, res) {
    res.redirect("/index.html");
});


console.log('Serving ' + path.normalize(__dirname + '/../app'));

//noinspection JSValidateTypes
app.configure(function () {
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.static(path.normalize(__dirname + '/../app')));
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
    app.use(app.router);
});

app.listen(port);
console.log('Server started...');
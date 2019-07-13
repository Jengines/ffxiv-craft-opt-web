#!/usr/bin/env node

var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var morgan = require('morgan');
var path = require('path');

var app = connect();

app.use(morgan('dev'));
app.use('/', serveStatic(path.join(__dirname, 'app')));

const port = 5000;
app.listen(process.env.PORT || 8888)

console.log('Server listening on port', port);

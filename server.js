<!--Milestone 2 - Chạy server-->
var express = require('express');
var app = express();

app.listen(3000, function () {
  console.log('now listening on http://localhost:3000');
})

<!--cấu hình views-->
var ect = require('ect');
var ectRenderer = ect({ watch: true, root: __dirname + '/views', ext : '.ect' });
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

<!--thêm routes vào server-->
var routes = require('./routes');

<!--Cấu hình routes trong server.js-->
app.use('/', routes);
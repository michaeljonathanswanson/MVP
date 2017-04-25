var mongoose = require('mongoose');
var connect = require('connect');
var serveStatic = require('serve-static');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var db = mongoose.connection;
var diraySchema = mongoose.Schema({
  diray: String
});
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', function(req, res, next) {
  console.log('POST BODY', req.body);
  res.send('test');
  next();
})
app.use(serveStatic(__dirname), function(req, res, next) {
  console.log('req method', req.method);
  console.log('req params', req.params);


  if (req.method === "POST") {
    console.log('req BODY', req.body)
    diraySchema.diray = JSON.stringify(req.body)
  }
  next();
})
// console.log('DB', db);


mongoose.connect('mongodb://localhost/mvp');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB listining')
});


app.listen(8080, function(){
  console.log('Server running on 8080...');
});

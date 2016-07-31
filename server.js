var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')
var config = require('./settings.config.js');
var db;

app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({
  extended: true
})); 

MongoClient.connect("mongodb://localhost:27017/portfolio", function(err, database) {
  if (err) return console.log(err);
  db = database;
  
  app.listen(3000, function() {
    console.log('listening on 3000');
  });
});

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api',function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/:title', function(req, res) {
  console.log("GET: /api/" + req.params.title);
  db.collection('projects').findOne({"title": req.params.title}, function(err, results) {
    if (err) {
      console.log(err);
    }
    
    if (results) {
      res.json(results);
    }
    else {
      res.json({"title": "Post not found", "body": "That post could not be found."});
    }
  });
});

app.post('/api/post', function(req, res) {
  console.log("POST: /api/post");
  
  if (req.body.key != config.authKey) {
    return false
  }

  var dbOp = db.collection('projects').insert({
    "title": req.body.title,
    "header": req.body.header,
    "subheader": req.body.subheader,
    "body": req.body.body
   });

  if (dbOp) return true;
  else return false;
});

app.get('/api/edit/:title', function(req, res) {
  console.log("GET: /api/edit/" + req.params.title);
  db.collection('projects').findOne({"title": req.params.title}, function(err, results) {
    if (err) {
      console.log(err);
    }
    
    if (results) {
      res.json(results);
    }
    else {
      res.json({"title": "Post not found", "body": "That post could not be found."});
    }
  });
});

app.post('/api/edit/:title', function(req, res) {
  console.log("POST: /api/edit/" + req.params.title);

  if (req.body.key != config.authKey) {
    return false
  }

  var dbOp = db.collection('projects').insert({
    "title": req.body.title,
    "header": req.body.header,
    "subheader": req.body.subheader,
    "body": req.body.body
   });

  if (dbOp) return true;
  else return false;

});

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')
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
  console.log(req.body);
});

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var bodyParser = require('body-parser')
var config = require('./settings.config.js');
var db;

app.use(bodyParser.json());
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

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//Routes
app.post('/api/post', postEntry("post"));
app.get('/api/post/:title', getEntry("post"));
app.get('/api/postlist', getEntryList("post"));

app.post('/api/project', postEntry("project"));
app.get('/api/project/:title', getEntry("project"));
app.get('/api/projectlist', getEntryList("project"));

//Higher Order Functions for routing
function getEntry(entryType) { 
    return function(req, res) {
        console.log("GET: /api/" + entryType + "/" + req.params.title);
        db.collection('posts').findOne({
            "slug": req.params.title,
            "type": entryType
        }, function(err, results) {
            if (err) {
                console.log(err);
            }
    
            if (results) {
                res.json(results);
            }
            else {
                res.json({
                    "title": entryType.toUpperCase() + " not found",
                    "body": "That post could not be found."
                });
            }
        });
    }
}

function postEntry(entryType) {
    return function(req, res) {
        console.log("POST: /api/" + entryType);
    
        if (req.body.key != config.authKey) {
            return false;
        }
    
        var dbOp = db.collection('posts').update(
            {
                "slug": req.body.slug,
                "type": entryType,
            },
            {
                "type": req.body.type,
                "slug": req.body.slug,
                "title": req.body.title,
                "tagline": req.body.tagline,
                "header": req.body.header,
                "subheader": req.body.subheader,
                "body": req.body.body,
                "metatitle": req.body.metatitle,
                "metadesc": req.body.metadesc,
                "lastedited": new Date()
            },
            {
                upsert: true
            }
        );
    
        if (dbOp) return true;
        else return false;
    }
}

function getEntryList(entryType) { 
    return function(req, res) {
        console.log("GET: /api/" + entryType + "list");
        var cursor = db.collection('posts').find(
            {
                "type": entryType
            },
            {
                "slug": 1,
                "title": 1,
                "tagline": 1,
                "lastedited": 1
            }
        )
        .sort(
	    {
                "lastedited": -1
            }
        );

        cursor.toArray(function(err, doc) {
            if (err) console.log(err);
		
	        res.json(doc);
        });
    }
}

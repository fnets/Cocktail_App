var express = require('express')
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
var db;

///////////////////
//Cloud9 version///
///////////////////
var server = http.createServer(app);
app.use(express.static(path.resolve(__dirname, 'static')));

///////////////////
//local version///
///////////////////
//app.use(express.static('static'));
//var server = app.listen(3000, function() {

app.get('/api/cocktails', function(req, res) {
  console.log("Query string", req.query);
  var filter = {};
  if (req.query.ingredients)
    filter.ingredients = req.query.ingredients;
  if (req.query.name)
    filter.name = req.query.name;

  db.collection("cocktails").find(filter).toArray(function(err, docs) {
    res.json(docs);
  });
});

app.use(bodyParser.json());
app.post('/api/cocktails/', function(req, res) {
  console.log("Req body:", req.body);
  var newCocktail = req.body;
  db.collection("cocktails").insertOne(newCocktail, function(err, result) {
    var newId = result.insertedId;
    db.collection("cocktails").find({_id: newId}).next(function(err, doc) {
      res.json(doc);
    });
  });
});

MongoClient.connect("mongodb://" + process.env.IP + "/cocktailsdb", function(err, dbConnection) {
  db = dbConnection;
    server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){  //Cloud9 version
  	var port = server.address().port;
  	console.log("Started server at port", port);
  });
});
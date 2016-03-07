var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getgirl',function(req,res,next) {
 fs.readFile(__dirname + '/girlnames.dat.txt',function(err,data) {
   if(err) throw err;

   var firstLetters = req.query.first.toUpperCase();
   var lastLetters = req.query.last.toUpperCase();
   var tuples = data.toString().split("\n");
   var names = [];

   for (var i = 0; i < tuples.length; i++) 
   {
   	var lineValues = tuples[i].split(" ");

   	// if last letters match and first letters match push it on
   	var currentLastLetters = lineValues[0].slice(-lastLetters.length).toUpperCase();
   	console.log('last letters: ', currentLastLetters);
   	var currentFirstLetters = lineValues[0].substring(0, firstLetters.length).toUpperCase();
   	console.log('first letters: ', currentFirstLetters);


   	if (currentFirstLetters == firstLetters && currentLastLetters == lastLetters){
   		names.push(lineValues[0]);
   	}
   	else if(firstLetters.length == 0 && currentLastLetters == lastLetters) names.push(lineValues[0]);
   	else if(lastLetters.length == 0 && currentFirstLetters == firstLetters) names.push(lineValues[0]);
   }


   var jsonresult = [];
   for(var i = 0; i < names.length; i++) 
   {
     if(names[i].length > 0) jsonresult.push({name:names[i]});
   }  

   console.log('result:', jsonresult);
   res.status(200).json(jsonresult);  
 });
});


router.get('/getboy',function(req,res,next) {
 fs.readFile(__dirname + '/boynames.dat.txt',function(err,data) {
   if(err) throw err;

   var firstLetters = req.query.first.toUpperCase();
   var lastLetters = req.query.last.toUpperCase();
   var tuples = data.toString().split("\n");
   var names = [];

   for (var i = 0; i < tuples.length; i++) 
   {
   	var lineValues = tuples[i].split(" ");

   	// if last letters match and first letters match push it on
   	var currentLastLetters = lineValues[0].slice(-lastLetters.length).toUpperCase();
   	console.log('last letters: ', currentLastLetters);
   	var currentFirstLetters = lineValues[0].substring(0, firstLetters.length).toUpperCase();
   	console.log('first letters: ', currentFirstLetters);


   	if (currentFirstLetters == firstLetters && currentLastLetters == lastLetters){
   		names.push(lineValues[0]);
   	}
   	else if(firstLetters.length == 0 && currentLastLetters == lastLetters) names.push(lineValues[0]);
   	else if(lastLetters.length == 0 && currentFirstLetters == firstLetters) names.push(lineValues[0]);
   }


   var jsonresult = [];
   for(var i = 0; i < names.length; i++) 
   {
     if(names[i].length > 0) jsonresult.push({name:names[i]});
   }  

   console.log('result:', jsonresult);
   res.status(200).json(jsonresult);  
 });
});


module.exports = router;

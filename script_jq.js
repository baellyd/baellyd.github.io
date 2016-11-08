//var http = require('http');
/*
var express_hb = require('express-handlebars');
var path = require('path');
var session = require('express-session');
var request = require('request');
var body_parser = require('body-parser');
*/


//express_hb.create({defaultLayout:'layout'});


//https://github.com/olalonde/node-yelp
//https://expressjs.com/en/starter/static-files.html
//http://blog.modulus.io/absolute-beginners-guide-to-nodejs

$(document).ready(function(){
	$('#respond_form').append("<form method='GET'>");
	$('#respond_form').append("<br/>Business type:     <input id= 'business_type'>");
	$('#respond_form').append("<br/>City: <input id= 'city'> <br/>State: <input id= 'state'>  <br/>Zip:  <input id= 'zip'>");
	$('#respond_form').append("<button id ='submitBtn' >Submit</button></form>");

	$('#submitBtn').click(function(){
		$respond_form = $('#respond_form');
		$results = $('#results');
		$business_type = $('#business_type');
		$city = $('#city');
		$state = $('#state');
		$zip = $('#zip');
		$respond_form.empty();
		$results.append("<br/>Submitted to JavaScript function:<br\>" );
		if($business_type.val() !== '') $results.append($business_type.val() + "<br/>");
		if($city.val() !== '') $results.append($city.val() + "<br/>");
		if($state.val() !== '') $results.append($state.val() + "<br/>");
		if($zip.val() !== '') $results.append($zip.val() + "<br/>");	
	});
	
		function process_data(busType, location){
			var jsonObj = yelpAPI(busType, busLocation);
		}
}

function yelpAPI(busType, busLocation){
	var Yelp = require('yelp');
	var businesses;
	var yelp = new Yelp({
		consumer_key: '830ldbmoEOO933pTxaoO0A',
		consumer_secret: '4xBl8WJ_CvT4ObOsQPXEHJ_cjuM',
		token: 'pXFLdNfi28Tfq41zeHP4GlvJiCp42zOW',
		token_secret: 'liKWtBfQtm2L3P49OXA0zQQPofg',
	});
	
/*	yelp.search({term: busType, location: busLocation})
	.then(function (data) {
		var jsonString = JSON.stringify(data); // convert data to JSON string
		jsonObj = JSON.parse(jsonString).businesses; // Parse JSON string to JSON Object
		for(var prop in jsonObj){
			console.log(jsonObj[prop].name + ":" + jsonObj[prop].phone + "\n"); // Print each business JSON object
		}

	})
	.catch(function (err) {
		console.error(err);
	});
	return jsonObj;
	*/
} //end of yelpAPI function

function return_info(){

}
});


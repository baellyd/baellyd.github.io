if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
}

var busType = process.argv[2];
console.log(process.argv[2]);
var busLocation = "";

for(var i = 3; i < process.argv.length; i++){
	busLocation = busLocation + ' ' + process.argv[i];
	console.log(process.argv[i]);
}

var Yelp = require('yelp');
var businesses;
var yelp = new Yelp({
	consumer_key: '830ldbmoEOO933pTxaoO0A',
	consumer_secret: '4xBl8WJ_CvT4ObOsQPXEHJ_cjuM',
	token: 'pXFLdNfi28Tfq41zeHP4GlvJiCp42zOW',
	token_secret: 'liKWtBfQtm2L3P49OXA0zQQPofg',
});
	
yelp.search({term: busType, location: busLocation})

.then(function (data) {
	var jsonString = JSON.stringify(data); // convert data to JSON string
	jsonObj = JSON.parse(jsonString).businesses; // Parse JSON string to individual business JSON objects
	for(var prop in jsonObj){
		var busName = jsonObj[prop].name;
		var phoneNo = jsonObj[prop].phone;
		var addr = jsonObj[prop].location.address;
		var city = jsonObj[prop].location.city;
		var state = jsonObj[prop].location.state_code;
		var zip = jsonObj[prop].location.postal_code;
		var site = jsonObj[prop].url;
		var rate = jsonObj[prop].rating_img_url_large;
		
		// Print each business JSON object
		console.log(busName + "\nPhone: " + phoneNo + "\n" + addr + "\n" + city + ", " + state + " " + zip + "\n");	
	}

}).catch(function (err) {
		console.error(err);
});



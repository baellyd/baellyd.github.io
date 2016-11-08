//https://gist.github.com/mnemonicflow/1b90ef0d294c692d24458b8378054c81

$(document).ready(function(){
	document.getElementById("submitBtn").onclick = function(){
		var respond_form = document.getElementById("respond_form");
		var busType = document.getElementById("business_type").value;
		var city = document.getElementById("city").value;
		var state = document.getElementById("state").value;
		var zip = document.getElementById("zip").value;
		var results = document.getElementById("results");

		respond_form.innerHTML = "Submitted to JavaScript function:<br\>";
		respond_form.innerHTML = respond_form.innerHTML + busType + "<br\>" +  city 
		+ ", " + state + " " + zip;
		respond_form.innerHTML = respond_form.innerHTML + '<img id= "done" src = "fusion.png">';
		var location = city + state + zip;
		
		respond_form.style.backgroundColor = '#ffe6e6';
     
		//Create Random Nonce String
		var nonce = "";
		var nonceChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		for (var i = 0; i < 6; ++i){
			nonce += nonceChars[Math.floor(Math.random() * nonceChars.length)];
		}

		var time = new Date().getTime();
		
        var parameters = {
			term : busType,
			location : location,
			oauth_version: '1.0',
			oauth_signature_method : 'HMAC-SHA1',
			oauth_timestamp: time,
			oauth_nonce: nonce,
			oauth_consumer_key : '830ldbmoEOO933pTxaoO0A',
			oauth_token : 'pXFLdNfi28Tfq41zeHP4GlvJiCp42zOW',
			oauth_signature : '',
			callback : 'cb'
		};
				
        var request = {
			action : 'https://api.yelp.com/v2/search',
			method : 'GET',
        };
        
		var secrets = {
            consumerSecret : '4xBl8WJ_CvT4ObOsQPXEHJ_cjuM',
            tokenSecret : 'liKWtBfQtm2L3P49OXA0zQQPofg'
        };
	
		//Create base string for HMAC-SHA1 hashing		
		//Percentencode replaces !*'()in string with percent encoded characters %21, %2A, %27, %28, %29
		//Parameters are "normalized": combined  
		var baseStr = OAuth.percentEncode(request.method) + '&' + OAuth.percentEncode(request.action) + '&' + OAuth.percentEncode(OAuth.SignatureMethod.normalizeParameters(parameters));
		
		var key = OAuth.percentEncode(secrets.consumerSecret) + "&" + OAuth.percentEncode(secrets.tokenSecret);
		b64pad = '=';

		//Create signature using hashing function on base string and key		
		var signature = b64_hmac_sha1(key, baseStr);
		parameters.oauth_signature = signature;               
					
        $.ajax({
			url : request.action,
			data : parameters,
			dataType : 'jsonp', 
			cache : true,
			error : function() {
				console.log("Error.  Request not processed.");
			},
			success : function(data){
				// convert data to JSON string
				var jsonString = JSON.stringify(data); 
				
				// Parse JSON string to JSON Object
				jsonObj = JSON.parse(jsonString).businesses; 
				for(var prop in jsonObj){
				
					// Print each business JSON object
					console.log(jsonObj[prop].name + ":" + jsonObj[prop].phone + "\n"); 
					var imgUrl= jsonObj[prop].image_url;
					var busName = jsonObj[prop].name;
					var phoneNo = jsonObj[prop].phone;
					var addr = jsonObj[prop].location.address;
					var city = jsonObj[prop].location.city;
					var state = jsonObj[prop].location.state_code;
					var zip = jsonObj[prop].location.postal_code;
					var site = jsonObj[prop].url;
					var rate = jsonObj[prop].rating_img_url_large;
					results.innerHTML += "<div class= 'res'><img class= 'imgRes' src = " + imgUrl 
						+ "><br/><img src = " + rate + "><br/><a href = '" + site + "' "
						+  ">" + busName + "<\a><br/>Phone: " + phoneNo + "<br/>" 
						+ addr + "<br/>" + city + ", " + state + " " + zip + "<br/><br/><br/><br/></div>";	
				}
			}
		})
	};
});

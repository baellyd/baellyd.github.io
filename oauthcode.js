/*

getParameterList->*setParameter->(request, name, function)
OAuth.getParameterMap->decodeForm

getSignature->Returns signed signature
OAuth.SignatureMethod.sign(request, secrets)->gets base and hashes
SignatureMethod.getBaseString->parses and returns base
getSignature(basestr)->setParameter(req); Perform hash

percentEncode->normalizeParameters->getParameterList


percentEncode->getBaseString (combine URL, parameters) ->b64_hmac_sha1->
parseUri->normalizeUrl->
normalizeParameters->
*/
var url = "https://api.yelp.com/v2/search";

var cKey = "oauth_consumer_key=830ldbmoEOO933pTxaoO0A";
var sigMeth = "&oauth_signature_method=HMAC-SHA1";

var sig = "";
		
var timestamp = "&oauth_timestamp=" + new Date().getTime();
console.log(timestamp);

var nonce = "&oauth_nonce=";
var nonceChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
for (var i = 0; i < 6; ++i){
	nonce += nonceChars[Math.floor(Math.random() * nonceChars.length)];
}

var vers = "&oauth_version= 1.0";

var oauthStr = "HMAC-SHA1" + url + 
var req_string = cKey + sig + sigMeth + timestamp + nonce + vers;
console.log(req_string);


var http = require("http");

var PORTgood = 7000;
var PORTbad = 7500;

if (http === PORTgood) {
	function handleRequestGood(request, response) {
		reponse.end("It works!! Path Hit: " + request.url);

		var server = http.createServer(handleRequest);

		server.listen(PORTgood, function() {
			console.log("You're so talented!");
		})
	}
} else if (http === PORTbad) {
	function handleRequestBad(request, response) {
		reponse.end("It works!! Path Hit: " + request.url);

		var server = http.createServer(handleRequest);

		server.listen(PORTbad, function() {
			console.log("You stink...");
		})
	};
};
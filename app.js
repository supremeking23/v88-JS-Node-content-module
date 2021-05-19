// cars.cats, new
// get the http module
var http = require("http");
var fs = require("fs");
var static = require("./static")();

// fs module allows us to read and write content for responses

const PORT = 7077;

var server = http.createServer(function (req, res) {
	// console.log(static_contents());
	console.log(`client request URL: ${req.url}`);
	static.static_contents(req, res, fs);
});
// tell your server which port to run on

server.listen(PORT);
console.log(`Running in localhost at ${PORT}`);

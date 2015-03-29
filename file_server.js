var fs = require('fs')
var http = require('http')
var file = process.argv[3];
var port = process.argv[2];

var server = http.createServer(function (req, res) {
	
	var fstream = fs.createReadStream(file, 'r');	
	fstream.pipe(res);
})
server.listen(port);


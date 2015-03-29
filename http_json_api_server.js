var http = require('http')
var url = require('url')
var port = Number(process.argv[2]);

http.createServer(function (req,res){

	var req_obj = url.parse(req.url, true);
	var date = new Date(req_obj.query.iso);
	console.log(req_obj);
	res.writeHead(200, { 'Content-Type': 'application/json' })

	if (req_obj.pathname == '/api/parsetime'){
		res.end(JSON.stringify(parseTime(date)));
	}	

        if (req_obj.pathname == '/api/unixtime'){
                res.end(JSON.stringify(unixTime(date)));
        }


}).listen(port);

function parseTime(date){
	var result = {}
	result.hour = date.getHours();
	result.minute = date.getMinutes();
	result.second = date.getSeconds();
	return result;
}

function unixTime(date){
	return { "unixtime": date.getTime() } ;
}

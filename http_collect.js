var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
	
	var data_set = "";
	response.setEncoding('utf8');

	response.on('data', function(chunk){
		
			data_set += chunk;

		}
	);

	response.on('end', function(){
			console.log(data_set.length);
			console.log(data_set);
		}
	);
});

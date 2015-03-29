var http = require('http');

module.exports = function (url, pos, callback){

	http.get(url, function(response){
	
		var data_set = "";
		response.setEncoding('utf8');

		response.on('data', function(chunk){
		
				data_set += chunk;

			}
		);

		response.on('end', function(){
				callback(data_set, pos);
			}
		);
	});
}

var fs = require('fs');
var path = require('path');
// var dir = process.argv[2];
// var ext = process.argv[3];

module.exports = function(dir, ext, callback){

	var filtered_files = new Array();

	fs.readdir(dir, function(err, list){

		if (err) return callback(err);

		list.forEach(function(file){
			if (path.extname(file) == '.' + ext){
				filtered_files.push(file);
			}
		});

		callback(null, filtered_files);
	
	});

}

var get = require('./juggling_async_module.js');

var urls = [ process.argv[2], process.argv[3], process.argv[4]];
var res = ["","",""];

var callbacks = 0;
var pos = 0;

urls.forEach(function(url){
	callbacks++;
	get(url, pos++, function(data, r_pos){
		res[r_pos] = data;
		callbacks--;
		if (callbacks === 0) print_result();
	});
});

function print_result(){

	res.forEach(function(r){console.log(r)});
}

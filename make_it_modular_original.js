var ls = require('./make_it_modular_module.js');

var dir = process.argv[2];
var ext = process.argv[3];

ls (dir, ext, function(err, list){
	if (err) return;

	list.forEach(function(e){console.log(e)});
})


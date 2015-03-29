var fs = require('fs');
var file = process.argv[2];

var bf = fs.readFileSync(file);

var lines = bf.toString().split('\n');

console.log(lines.length - 1);

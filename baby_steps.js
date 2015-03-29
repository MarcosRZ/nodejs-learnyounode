var params = process.argv;
var result = 0;

for (var i = 2 ; i < params.length; i++){
	result += Number(params[i]);
}

console.log(result);

var net = require('net');
var port = process.argv[2];

function two_digit_str(n){

	return (n < 9) ? ("0" + n) : n;

}


var server = net.createServer(function (socket) {
  // socket handling logic
  var date = new Date();

  var date_string = "";
  var year = date.getFullYear();
  var month = two_digit_str(date.getMonth()+1);
  var day = two_digit_str(date.getDate());
  var hour = two_digit_str(date.getHours());
  var minute = two_digit_str(date.getMinutes());

  var date_string = year + "-" + month + "-" + day + " " + hour + ":" + minute

  socket.end(date_string);

});
server.listen(port);


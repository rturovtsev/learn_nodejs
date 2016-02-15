var http = require('http')
	fs = require('fs');

var server = http.createServer(function (req, res) {
	switch(req.url) {
		case "/":
			sendFile("index.html");
		default:
			res.writeHead(404, {'Content-type': 'text/html;charset=utf-8;'});
			res.end("Страница не найдена", "utf-8");
	}


	function sendFile (file) {
		fs.createReadStream(__dirname + file, function (data) {
			data.pipe(res);
		});
	}
});

server.listen(8080);
console.log("http://localhost:8080");
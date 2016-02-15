var http = require('http')
	fs = require('fs'),
	chat = require('./chat');

var server = http.createServer(function (req, res) {
	switch(req.url) {
		case "/":
			sendFile("/index.html");
			break;
		case "/publish":
			var body = '';

			req
			.on('readable', function() {
			  body += req.read();

			  if (body.length > 1e4) {
			    res.statusCode = 413;
			    res.end("Слишком большое сообщение");
			  }
			})
			.on('end', function() {
			  try {
			    body = JSON.parse(body);
			  } catch (e) {
			    res.statusCode = 400;
			    res.end("Не правильный запрос");
			    return;
			  }

			  chat.publish(body.message);
			  res.end("ok");
			});
			break;
		case "/subscribe":
			chat.subscribe(req, res);
			break;
		default:
			res.writeHead(404, {'Content-type': 'text/html;charset=utf-8;'});
			res.end("Страница не найдена", "utf-8");
	}


	function sendFile (file) {
		var fileStream = fs.createReadStream(__dirname + file);

		fileStream.pipe(res);
	}
});

server.listen(8080);
console.log("http://localhost:8080");
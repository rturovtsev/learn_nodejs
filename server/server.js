var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

    var urlParse = url.parse(req.url, true);

    if (urlParse.pathname == '/echo' && urlParse.query.message) {
        res.end(urlParse.query.message, "utf-8");
        return;
    }

    res.statusCode = 404;
    res.end("Page not found");
});

server.listen(1337, '127.0.0.1');
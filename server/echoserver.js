var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {

    var urlParse = url.parse(req.url, true);

    if (urlParse.pathname == '/echo' && urlParse.query.message) {
        //res.writeHead(200, "OK", {'Cache-control': 'no-cache'}); //явно отошлет сразу
        res.setHeader('Cache-control', 'no-cache'); //не явно, отошлет со следущим, тут с end
        res.end(urlParse.query.message, "utf-8");
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});

server.listen(1337, '127.0.0.1');



/*
var counter = 0;
var emit = server.emit;
server.emit = function(event /!* ...*!/){
    console.log(event);
    emit.apply(server, arguments);
};

server.on('request', function(req, res) {
    res.end("Привет, мир! " + ++counter);
});*/

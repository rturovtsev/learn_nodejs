var clients = [];

exports.publish = function(txt) {
	clients.forEach(function(res) {
		res.end(txt);
	});

	clients = [];
};

exports.subscribe = function(req, res) {
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
	clients.push(res);

	res.on('close', function() {
		clients.splice(clients.indexOf(res), 1);
	});
};
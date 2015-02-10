var http = require('http');
http.createServer(function(req, res){
  var urlParts = req.url.split("/");
  var name = urlParts[2];
  var action = urlParts[1];

  var requestHandler = {
    'time': (new Date()).toString() + '\n' ,
    'greet': 'HELLO ' + name + '\n'
  }

  res.writeHead(200, {
    'content-type': 'text/plain'
  });

  res.end(requestHandler[action]);

}).listen(3000);
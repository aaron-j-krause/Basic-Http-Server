var http = require('http');
http.createServer(function(req, res) {
  var urlParts = req.url.split('/');
  var name = urlParts[2] || 'ANONYMOUS';
  var action = '/' + urlParts[1];

  var requestHandler = {
    '/time': (new Date()).toString() + '\n' ,
    '/greet': 'HELLO ' + name + '\n',
    '/':'hit "/time" for the current time or' +
    '"/greet/[yournamehere]" for a CUSTOM GREETING \n'
  };

  res.writeHead(200, {
    'content-type': 'text/plain'
  });

  res.end(requestHandler[action]);

}).listen(3000);

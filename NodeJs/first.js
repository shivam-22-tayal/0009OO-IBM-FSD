console.log("Heeloo Node")
var http = require('http');

http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
if(req.url=='/status' && req.method=='POST'){
    res.end('Hello World!');
}
}).listen(8080);

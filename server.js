var http = require('http');
var os = require( 'os' );
var requests=0;
var podname= process.env.HOSTNAME;
var startTime;
var host;
var interfaces = os.networkInterfaces( );
var handleRequest = function(request, response) {
  response.setHeader('Content-Type', 'text/plain');
  response.writeHead(200);
  response.write("Hello Kubernetes bootcamp! | Running on: ");
  response.write(host || 'undefined');
  response.end(" | v=1\n");
}

var www = http.createServer(handleRequest);

www.listen(8081,function () {
  startTime = new Date();;
  Object.keys(interfaces).forEach(function(iName) {
    interfaces[iName].forEach(function(interface){
      if('IPv4' === interface.family && !interface.internal) {
        host = interface.address
      }
    });
  });
  console.log ("Kubernetes Bootcamp App Started At:",startTime, "| Running On: " ,host, "\n" );
});

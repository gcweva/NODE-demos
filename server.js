var http= require('http');
var server = http.createServer(requestHandler);
		
	function requestHandler(req,res	){
	res.end('welcome to my app');
	}
	
	server.listen(4000,function(){
    console.log("server running @4000");})
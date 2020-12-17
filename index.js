 var http=require('http');
 var server=http.createServer(function(req,res){
    
  if(req.url=='/'){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write("<!doctype><head><title>Welcome</title></head>");
      res.write("<html><body><h1>Home Page</h1></body></html>");
      res.write("<p><img src='utility/assests/img/bg_2020.JPG' alt='Logo'/>Welcome to Helps Communications page, we are glad your are here</P>")
      res.end();
      debugger;
  }



 });
server.listen(8081);
console.log('Server started');(♦)
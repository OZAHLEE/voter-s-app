var http=require('http');
var server = http.createServer(function(req,res){
	 var friends={
		 "name":"Ambrose","age":30,
		 "name":"Jael Apio","age":1
	 }
	 console.log(friends.name,+" "+friends.age)
});
server.listen(5000);
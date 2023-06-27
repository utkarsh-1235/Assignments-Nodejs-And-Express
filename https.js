const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.write('<h1> I Am happy To Learn Full Stack Developement From PW Skills </h1>');
    }
    res.end();
    
})

server.listen('5002');
console.log("Server created successfully on port 5002");
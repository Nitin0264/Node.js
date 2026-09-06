const http = require('http')

const server = http.createServer((req,res)=>
{
 console.log(req.url,req.method)

 //set header content type 
 res.setHeader('content-Type', 'text/plain')
 res.write('hello ,ninjas');
 res.end();
});

server.listen(3000,'localhost',()=>
{
  console.log('listening for the port in port 3000')
})


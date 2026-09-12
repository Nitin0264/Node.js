const http = require('http')

const server = http.createServer((req,res)=>
{
 console.log('request made')
});

server.listen(3000,'localhost',()=>
{
  console.log('listening for the port in port 3000')
})
//localhost take you to the part with ip adderessof 7 numbers 127.0.0.1  this one means the your computer 

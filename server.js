const http = require('http')
const fs = require('fs');

const server = http.createServer((req,res)=>
{
 console.log(req.url,req.method)

 //set header content type 
 res.setHeader('content-Type', 'text/html');


   let path  = './views/index.html';
   switch(req.url)
   {
    case '/':
    path += 'index.html';
    break;
   case '/about':
    path+= 'about.html';
    break;
    case '404.html':
      path +='404.html'
    break;
    }
   fs.readFile('./views/index.html', (err,data)=>
  {
    if(err)
    {
      console.log(err);
      res.end();
    }
    else{
   
      res.end(data);
    }
  })
});

server.listen(3000,'localhost',()=>
{
  console.log('listening for the port in port 3000')
})


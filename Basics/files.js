const fs = require('fs')
// file system

fs.readFile('./docs/blog1.txt',(err,data)=>
{
 if(err)
 {
  console.log(err);
 }
 console.log(data.toString())
})

console.log("this is the last line")
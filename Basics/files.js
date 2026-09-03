const fs = require('fs')
// // file system

// fs.readFile('./docs/blog1.txt',(err,data)=>
// {
//  if(err)
//  {
//   console.log(err);
//  }
//  console.log(data.toString())
// })

// console.log("this is the last line")



//Writing Files
// fs.writeFile('./docs/blog1.txt','Hello World',()=>
// {
//   console.log('file was written ')
// })
// fs.writeFile('./docs/blog2.txt','hello ninjas',()=>
// {
//   console.log('file was wriiten ')
// })


// Directories
if(!fs.existsSync('./assets'))
fs.mkdir('./assets',()=>
{
  if(err)
  {
    console.log(err)
  }
  console.log('directory created succesfully')
})
else{
  fs.rmdir('./assets',(err)=>
  {
    if(err)
    {
      console.log(err)
    }
    console.log('folder deleted ')
  })
}
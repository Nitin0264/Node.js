const fs =require('fs')
const readStream = fs.createReadStream('./docs/blog3.txt',{encoading:'utf8'})

const writeStream = fs.createWriteStream('./docs/blog4.txt')
readStream.on('data',(chunk)=>
{
  console.log('-------new chunk---------------')
  console.log(chunk);
  writeStream('\n New Chunk\n')
  writeStream.write()
})
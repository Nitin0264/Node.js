

const readline = require('readline');
const rl = readline.createInterface({
  input:process.stdin,
  output:process.stedout
})
rl.question("enter your name ",(name)=>{
  console.log("you enterd "+name);
  rl.close();
})
rl.on('close',()=>
{
  console.log("interface is closed ")
  process.exit(0);
})
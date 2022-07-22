// var a=4;
// var b=3;
// console.log(a+b);
// console.log("dada===>",__filename);
// console.log("dada===>",__dirname);

// // const fsa =require('fs');
// // fsa.writeFileSync("bbc.txt","");

// const fsa =require('fs').writeFileSync;
// fsa("xyz.txt","")
// const colors =require('colors');
// console.log("hello".red);
// const fsa =require('fs');
// fsa.writeFileSync("bbc.txt","");
// https://github.comprepbytesnodejs/marchbatch

// const http=require("http");
// const handler=function(req,res){
//     console.log(req.url);
//     if(res.url=="/"){
//         res.write("hey there i am route route");
//         res.end();
//     }
//     else  if(res.url=="/data"){
//         res.write("DAYA there i am route route");
//         res.end();
//     }  else  if(res.url=="/html"){
//         res.write("DAYA there i am route route");
//         res.end();
//     }
// }\
// const http=require("http");
// const server=http.createServer(req,res);
// server.listen(9090,function(){
//     res.write("server running");
//          res.end();
// });

// var http = require('http');
// const server=http.createServer(function (req, res) {
 
//   res.write("sey hi vijay");
//   res.end();
// })
const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("Hello world")
    res.end()

})

server.listen(8000,()=>{
    console.log('App is running')
})


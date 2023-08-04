// // const http=require('http');
// import http from 'http';
// // const temp=require('./features');
// // import temp from './features.js';
// // import {temp2,temp3} from './features.js';
// // console.log(temp2);
// // console.log(temp3);

// //all import
// import * as obj from './features.js';
// // console.log(obj.default);

// // const server=http.createServer(()=>{
// //     console.log('I hear you! Now what?');
// // });

// import {getRandomNumber} from './Random_Number.js';

// import fs from 'fs';

// const openHtml=fs.readFileSync('./index.html');
// // console.log(openHtml);

// console.log(getRandomNumber());

// const server=http.createServer((req,res)=>{
//     // console.log(req.url);
//     // res.end("Server is running up-to date");

//     if(req.url==='/'){
//         //by using Async
//         // fs.readFile('./index.html',(err,data)=>{
//         //     res.end(data);
//         //     console.log(data);
//         // });
        
//         // res.end('Welcome to our home page');
//         res.end(openHtml);
//     }
//     else if(req.url==='/about'){
//         res.end('Here is our short history');
//         // console.log(req.url);
//     }
//     else if(req.url==='/random')
//     {
//         res.end(getRandomNumber());
//     }
//     else if(req.url==='/contact'){
//         res.end('Contact with us');
//     }
//     else {
//         res.end(`
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <title>Error</title>
//             <style>
//                 body{
//                     background-color: black;
//                 }
//                 p{
//                     color: white;
//                     font-size: 20px;
//                     text-align: center;
//                     padding: 20px;
//                     background-color: red;
//                 }
//             </style>
//         </head>
//         <body>
//             <p>Sorry, the page you are looking for doesn't exist</p>
//         </body>
//         </html>
//         `);
//     }    
// });


// server.listen(3000,()=>{
//     console.log('Server is listening on port 3000. Ready to accept requests!');
// });


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//express js

// import express from 'express';
// import path from 'path';
// const server=express();

// server.get("/new",(req,res)=>{
//     // res.send("Welcome to our home page");
//     // res.statusCode(500);
//     res.sendStatus(400);
// });

// server.get("/api",(req,res)=>{
//     // res.json({name:"Alex",age:20,product:[]});
//     //multiple json
//     res.json([ 
//         {name:"Alex",age:20,product:[]},
//         {name:"Alex",age:20,product:[]} 
//     ]);
// });

// server.get("/",(req,res)=>{
//     const pathLocation=path.resolve();
//     // res.sendFile(pathLocation+'/index.html');
//     res.sendFile(path.join(pathLocation,'./index.html'));
// });

// server.listen(3000,()=>{
//     console.log('Server is listening on port 3000. Ready to accept requests!');
// });







//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//ejs

import express from 'express';
import path from 'path';
const app=express();

//setting up the view engine
app.set("view engine","ejs");

//setting up the views directory
app.use(express.static(path.join(path.resolve(),'public')));

// app.get("/",(req,res)=>{
//     // res.render("index");
//     res.render("index",{name:"By Alex",lastName:"john"});
// });

app.get("/",(req,res)=>{
    res.sendFile("index");

});

app.listen(3000,()=>{
    console.log("Working with EJS");
})
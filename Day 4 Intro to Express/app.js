//Core module
const http=require('http');
//External module
const express=require('express')
//Local module
const UserRequestHandler=require('./user');


const app=express();


const port=3000;

app.get("/",(req,res,next)=>
{
  console.log('entered in 1st middleware');                //after res.send() you cant use next()
  next();  //it will execute next middleware with same path 
})

app.get("/",(req,res,next)=>
  {
    console.log('entered in 2nd middleware');  
    res.send('welcome kachhi');
  })

app.get('/user',(req,res)=>{
  console.log('entered in user handler');             
  res.send('<h1>Welcome user</h1>');
})



app.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
})

// const server= http.createServer(UserRequestHandler); (server creation Method of nodejs)
// server.listen(port,()=>{                                
//   console.log(`server is running on http://localhost:${port}`);
// });
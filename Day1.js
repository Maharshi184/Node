const http=require('http');
const fs=require('fs');
const port=3005;

const server= http.createServer((req,res)=>{
  if(req.url==='/')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write('<head>Welcome</head>');
    return res.end();
  }
  else if(req.url==='/sir')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write('<head>Welcome Maharshi</head>');
    return res.end();
  }
  res.write('<head>Welcome vidhi</head>');
  fs.writeFileSync('name.txt','vidhi upadhyay');
  res.end();
})

server.listen(port,()=>{
  console.log(`server is running on https://localhost:${port}`);
});
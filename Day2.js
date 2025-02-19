//created form using node.js & done navigation
const http=require('http');
const fs=require('fs');
const port=3000;
//1. Created form
const server= http.createServer((req,res)=>{   
  if(req.url==='/')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<html>
<head>
  <title>Document</title>
</head>
<body>
  <form action="/vidhi" method="post">
    <input type="text" id="name" name="name" placeholder="Enter your name">
    <input type="text" id="name1" name="name1" placeholder="Enter your Surname"><br>
    <input type="submit" value="Submit">
  </form>
  
</body>
</html>`);
    return res.end();
  }
  else if(req.url==='/a')                   //2. navigation
  {res.write(`
<html>
<head>
  <title>Document</title>
</head>
<body>
  <nav>
    <ul>
      <li><a href="answer">Vidhi</a></li>
    </ul>
  </nav>
</body>
</html>`);
return res.end();
  }
  else if(req.url==='/vidhi' && req.method==='POST')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write('<head>The name is vidhi upadhyay</head>');
    return res.end();
  }
  else if(req.url==='/answer')
    {
      res.setHeader('Content-Type', 'text/html');
      res.write('<head>Congratulations</head>');
      return res.end();
    }
  res.write('<head>Welcome vidhi</head>');
  res.end();
})

server.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});
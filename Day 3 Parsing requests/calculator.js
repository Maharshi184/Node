//created form using node.js & done navigation

const fs=require('fs');
const {sumRequestHandler}=require('./sum');

//1. Created form
const CalculatorHandler= (req,res)=>{   
  if(req.url==='/')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<html>
<head>
  <title>Document</title>
</head>
<body>
  <h1>Welcome to Calculator<h1>
  <form action="/Calculate" method="post">
    <input type="text" id="num1" name="num1" placeholder="Enter number 1">
    <input type="text" id="num2" name="num2" placeholder="Enter number 1"><br>
    <input type="submit" value="Sum ">
  </form>
  
</body>
</html>`);
    return res.end();
  }
else if(req.url==='/Calculate' && req.method==='POST')  {
    return sumRequestHandler(req,res);
  }                 //2. navigation
res.write(`
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

exports.CalculatorHandler=CalculatorHandler;        //use of modules



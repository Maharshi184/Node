//created form using node.js & done navigation

const fs=require('fs');

//1. Created form
const UserRequestHandler= (req,res)=>{   
  if(req.url==='/')
  {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
<html>
<head>
  <title>Document</title>
</head>
<body>
  <form action="/submitDetails" method="post">
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
  else if(req.url==='/submitDetails' && req.method==='POST')
  {
    const body=[];
    req.on('data',chunk=>{
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end',()=>{
      const parsedBody=Buffer.concat(body).toString();             //[Parsing]
      console.log(parsedBody);
      const params=new URLSearchParams(parsedBody);
      // const bodeyObject={};
      // for(const[key,val]of params.enteries()){
      //   bodeyObject[key]=val;
      // }

      const bodeyObject=Object.fromEntries(params);
      console.log(bodeyObject);
      fs.writeFileSync('user.txt',JSON.stringify(bodeyObject));
    })

    

  }
  else if(req.url==='/answer')
    {
      res.setHeader('Content-Type', 'text/html');
      res.write('<head>Congratulations</head>');
      return res.end();
    }
  res.write('<head>Welcome vidhi</head>');
  res.end();
};

module.exports = UserRequestHandler;        //use of modules



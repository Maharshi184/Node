const sumRequestHandler = (req,res)=>{
  console.log("In sum request handler",req.url);  //to check wiring done successfully
  const body=[];
  req.on('data',function(chunk){body.push(chunk);});
  req.on('end',()=>{
    const bodystr= Buffer.concat(body).toString();
    const params=new URLSearchParams(bodystr);

   //method 1
    const bodyObject=Object.fromEntries(params);
    const result= Number(bodyObject.num1)+Number(bodyObject.num2);
    console.log(result);

    //method 2
    const sum=parseInt(params.get('num1'))+parseInt(params.get('num2'));
    console.log(sum);
    
    res.write(`
      <html>
        <head><title>sum</title></head>
        <body>
           <h1>Sum of two numbers is ${sum}</h1>
        </body>
      <html>
        `);
      return res.end();  

  })

}
exports.sumRequestHandler=sumRequestHandler;
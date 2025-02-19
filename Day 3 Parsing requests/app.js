const http=require('http');
const UserRequestHandler=require('./user');
const {CalculatorHandler}=require('./calculator');

const server= http.createServer(CalculatorHandler);

const port=3000;
server.listen(port,()=>{
  console.log(`server is running on http://localhost:${port}`);
});
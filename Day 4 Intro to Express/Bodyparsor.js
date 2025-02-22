// External Module
const express = require('express');
const bodyParser=require('body-parser');   //its depecated now generally it's not used

const app = express();



app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to Complete Coding</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
})

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {            
  console.log("Handling /contact-us for POST", req.url, req.method,req.body);   //give undefined bcs body is not parsed
   next();
})


app.use(bodyParser.urlencoded());    //it will parse incoming request bodies in HTTP requests

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method,req.body);   //it will give data bcs now req body is parsed
  res.send(`<h1>We will contact you shortly</h1>`);
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
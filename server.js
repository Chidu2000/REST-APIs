
// express is used for creating a local server without hosting when we are using nodejs.
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//configure body parser to use post requests
app.use(bodyParser.urlencoded({
    extended:true
}));app.use(bodyParser.json());

// created a function to display some message
app.get('/show',(req,res)=>{
    res.send('Hi Chidambar');
});

app.post('/add',function(req,res) {
    const num1 = req.body.a;
    const num2 = req.body.b;
    res.send('The sum of two numbers entered is ${num1 + num2}');
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
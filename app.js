const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


const tasks = [];
app.post('/addtask',(req,res)=>{
    const newtask = req.body.newTask;
    tasks.push(newtask);
    res.redirect('/');
});

app.get('/',(req,res)=>{
    res.render('index',{tasks:tasks});
});


app.listen(3000);
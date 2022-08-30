const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const database=require('./config/database');
//bring ejs templete
app.set('view engine','ejs');
const session=require('express-session');
const flash= require('connect-flash');

// bring body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//bring static
app.use(express.static('public'));
app.use(express.static('node_modules'));
// session and flash config .
app.use(session({
   secret: 'lorem ipsum',
   resave: false,
   saveUninitialized: false,
   cookie: {maxAge: 60000 * 15}
}))
app.use(flash())
//

app.get("./",(req,res)=>{
   res.send("hello worled");
})

const events=require("./routes/event-route");
app.use('/events',events);


app.listen(3000,()=>
{
   console.log("It is working on port 3000");
})

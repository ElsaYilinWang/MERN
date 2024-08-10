const path = require('path');

const express = require('express');
const app = express();


// Install cookie parser first: https://www.npmjs.com/package/cookie-parser
const cookieParser = require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req, res, next)=>{
    res.send("Sanity Check")
});

app.post('/process_login', (req, res, next)=>{
    // req.body is made by urlencoded, which parses the http message for sent data!
    const password = req.body.password;
    const username = req.body.username;
    // check the db to see if user credentials are valid
    // if they are valid...
        // - save their username in a cookie    
        // - is send them to the welcome page
    if(password === "x"){
        // res.cookie takes 2 args:
        // 1. name of the cookie
        // 2. value to set it to 
        res.cookie('username', username)
        // res.redirect takes 1 arg:
        // 1. Where to send the brower
        res.redirect('/welcome')
    } else {
        // The "?" is a special character in a URL
        res.json(req.body)
    }
});

app.get('/welcome', (req, res, next)=>{
    // req.cookies object will have a property for every named cookie
    // that has been set.
    res.render('welcome', {
        username:req.cookies.username
    })
})


app.get('/logout', (req, res, next)=>{
    // res.clearCookie takes 1 arg: 
    // 1. Cookie to clear (by name)
    res.clearCookie('username');
    res.redirect('/login');
})

app.listen(3000)
console.log("Server listening on port 3000...")

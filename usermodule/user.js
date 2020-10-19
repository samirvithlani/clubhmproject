const express = require('express')
const app = express.Router();

app.get('/',(req,res)=>{

    //res.send("<h1>HELLO</h1>")
    res.render('index',{
        "Name":"samir",
        "Email":"samir@gmail.com",
        "Age":20
    })
})
app.get('/about',(req,res)=>{

    res.render('about')
})
app.get('*',(req,res)=>{

    //res.send('404 Page not found..')\
    res.render('404',{
        "title":"Page not Found",
        "reason":"URL IS NOT AVAIALBLE..",
        "sender":"FILPKART.com"
    })
})

module.exports =app;
const express = require('express')
const app = express();
const http = require('http')
const path = require('path');
const user = require('./usermodule/user')
const hbs = require('hbs')

/* app.get('*',(req,res)=>{

    res.send('404 page not found..')
}) */
app.use("/user",user)
app.set('view engine','hbs')
const viewpath = path.join(__dirname,'template')
const partialsPath = path.join(__dirname,'./template/partials')
app.set('views',viewpath)
hbs.registerPartials(partialsPath)



var port = 3000;
var server = http.createServer(app);
server.listen(port, () => {
    console.log("server start on port", port)
})

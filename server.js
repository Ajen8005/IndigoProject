var express = require('express')
var app  = express()
var path = require('path')
const port = 8081


app.use(express.static('public'));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname + '/public/html/home.html'))
})



app.listen(port, () => {
    console.log('App listening att localhost\n')
})
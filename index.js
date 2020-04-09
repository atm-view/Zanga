var express = require('express')
var ip = require('ip')
var app = express()


app.get('/',function(req,res){
	res.send('This is the server response!!!')
})
app.get('/hello/',function(req,res){
	res.send('Hello from Tutorial...')
})

//var a = ip.address()
//console.log(a)

var server = app.listen(process.env.PORT || 8000,function(){
	console.log('started and listening on port 8000...')

})
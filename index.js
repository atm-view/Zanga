var express = require('express')
var app = express()


app.get('/',function(req,res){
	res.send('This is the server response!!!')
})
app.get('/hello/',function(req,res){
	res.send('Hello from Tutorial...')
})

var server = app.listen(8000,function(){
	console.log('started and listening on port 8000...')

})
var express = require('express')
var app = express()

app.use(function (req, res, next) {
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'PUT',
	})
	next()
})
app.post('/upload', function (req, res) {
	res.send('success')
})
app.listen(8055, function () {
    console.log('listen: 8055')
})
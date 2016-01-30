var express = require('express')
var path = require('path')
var app = express()
var routes = require('./routes/index')

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')


app.use('/', routes)


app.listen(4000, function() {
  console.log('Server listen at *:4000')
})




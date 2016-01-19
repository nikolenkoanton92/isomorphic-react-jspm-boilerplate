var express = require('express')
var path = require('path')
var app = express()

var ReactDOMServer = require('react-dom/server')
var React = require('react')

require('jsx-hook')()

var indexPage = require('./client/index.jsx')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  var app = React.createElement(indexPage)

  var page = ReactDOMServer.renderToString(app)
  res.render('layout', {
    page: page
  })
})

app.listen(4000, function() {
  console.log('Server listen at *:4000')
})

var express = require('express')
var path = require('path')
var app = express()

require('jsx-hook')()

var ReactDOMServer = require('react-dom/server')
var React = require('react')

var IndexPage = require('./public/containers/Index/index.jsx')
var AboutPage = require('./public/containers/About/index.jsx')
var FeaturePage = require('./public/containers/Feature/index.jsx')

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')


app.get('/', function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(IndexPage))
  res.render('layout', {
    page: page
  })
})

app.get('/about', function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(AboutPage))
  res.render('layout', {
    page: page
  })
})

app.get('/feature', function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(FeaturePage))
  res.render('layout', {
    page: page
  })
})


app.listen(4000, function() {
  console.log('Server listen at *:4000')
})




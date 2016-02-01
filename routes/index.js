var express = require('express')
var router = express.Router()

require('jsx-hook')()

var ReactDOMServer = require('react-dom/server')
var React = require('react')

var IndexPage = require('../public/containers/Index/index.jsx')
var AboutPage = require('../public/containers/About/index.jsx')
var FeaturePage = require('../public/containers/Feature/index.jsx')
var LoginPage = require('../public/containers/Login/index.jsx')

router.get('/', function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(IndexPage))
  res.render('layout', {
    page: page
  })
})

router.get('/about', function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(AboutPage))
  res.render('layout', {
    page: page
  })
})

router.get('/feature', function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(FeaturePage))
  res.render('layout', {
    page: page
  })
})

router.get('/login', function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(LoginPage))
  res.render('layout', {
    page: page
  })
})

module.exports = router

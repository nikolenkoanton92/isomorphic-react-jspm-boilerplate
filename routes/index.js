var express = require('express')
var router = express.Router()
var passport = require('passport')

require('jsx-hook')()

var ReactDOMServer = require('react-dom/server')
var React = require('react')

var IndexPage = require('../public/containers/Index/index.jsx')
var AboutPage = require('../public/containers/About/index.jsx')
var FeaturePage = require('../public/containers/Feature/index.jsx')
var LoginPage = require('../public/containers/Login/index.jsx')
var DashboardPage = require('../public/containers/Dashboard/index.jsx')

function isUserNotLogged(req, res, next) {
  if (req.user) {
    res.redirect('/dashboard')
  } else {
    next()
  }
}

function isUserLogged(req, res, next) {
  if (req.user) {
    next()
  } else {
    res.redirect('/login')
  }
}

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

router.get('/dashboard', isUserLogged, function(req, res) {
  var Page = ReactDOMServer.renderToString(React.createElement(DashboardPage))
  res.render('layout', {
    page: page
  })
})

router.get('/login', isUserNotLogged, function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(LoginPage))
  res.render('layout', {
    page: page
  })
})

router.post('/login', isUserNotLogged, passport.authenticate('local'), function(req, res) {
  res.json(req.user)
})

router.post('/logout', function(req, res) {
  req.logout()
  res.json({
    logout: true
  })
})
module.exports = router

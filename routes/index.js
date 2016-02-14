var express = require('express')
var router = express.Router()
var passport = require('passport')

require('jsx-hook')()

var ReactDOMServer = require('react-dom/server')
var React = require('react')


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

router.get('/', function(req, res, next) {
  var tree = {
    title: 'Index Page'
  }

  res.locals.tree = tree
  next()
})

router.get('/about', function(req, res, next) {

  var tree = {
    title: 'About Page'
  }
  res.locals.tree = tree
  next()
})

router.get('/feature', function(req, res, next) {
  var tree = {
    title: 'Feature Page',
    featureList: ['JSPM', 'Express', 'React', 'Babel', 'React Router', 'Authentication', 'Bootstrap']
  }
  res.locals.tree = tree
  next()
})

router.get('/dashboard', isUserLogged, function(req, res) {
  var page = ReactDOMServer.renderToString(React.createElement(DashboardPage))
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

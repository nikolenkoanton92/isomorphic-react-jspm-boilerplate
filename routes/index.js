var express = require('express')
var router = express.Router()
var passport = require('passport')

require('jsx-hook')()

function isUserNotLogged(req, res, next) {
  console.log('Come is User Not Logged')
  if (req.user) {
    res.redirect('/dashboard')
  } else {
    next()
  }
}

function isUserLogged(req, res, next) {
  console.log('Come is User Logged')
  if (req.user) {
    next()
  } else {
    res.redirect('/login')
  }
}

function renderPage(req, res, next, tree) {
  if (req.get('Content-Type') === 'application/json') {
    res.json(tree)
  } else {
    res.locals.tree = tree
    next()
  }
}

router.get('/', function(req, res, next) {
  var accept = req.accepts(['html', 'json'])

  var tree = {
    title: 'Index Page'
  }
  renderPage(req, res, next, tree)
})

router.get('/about', function(req, res, next) {
  var tree = {
    title: 'About Page'
  }
  renderPage(req, res, next, tree)
})

router.get('/feature', function(req, res, next) {

  var tree = {
    title: 'Feature Page',
    featureList: [{
      id: 1,
      name: 'JSPM'
    }, {
      id: 2,
      name: 'Express'
    }, {
      id: 3,
      name: 'React'
    }, {
      id: 4,
      name: 'Babel'
    }, {
      id: 5,
      name: 'React'
    }, {
      id: 6,
      name: 'Router'
    }, {
      id: 7,
      name: 'Authentication'
    }, {
      id: 8,
      name: 'Bootstrap'
    }]
  }
  renderPage(req, res, next, tree)
})

router.get('/dashboard', isUserLogged, function(req, res, next) {

  var tree = {
    title: 'Dashboard Page'
  }

  renderPage(req, res, next, tree)
})


router.get('/login', isUserNotLogged, function(req, res, next) {
  console.log('Come to login page')
  var tree = {
    title: 'Login Page'
  }
  renderPage(req, res, next, tree)
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

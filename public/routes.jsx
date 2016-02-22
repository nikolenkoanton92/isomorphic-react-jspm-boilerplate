var React = require('react')
var Index = require('./containers/Index/index.jsx!')
var App = require('./containers/App/index.jsx!')
var Feature = require('./containers/Feature/index.jsx!')
var About = require('./containers/About/index.jsx!')
var Dashboard = require('./containers/Dashboard/index.jsx!')
var Login = require('./containers/Login/index.jsx!')
var Router = require('react-router')
var Route = Router.Route
var IndexRoute = Router.IndexRoute

function isUserAuth(nextState, replace) {
  if (typeof window !== 'undefined') {
    if (!window.tree.get('loggedIn')) {
      replace({
        pathname: '/login',
        state: {
          nextPathname: nextState.location.pathname
        }
      })
    }
  }
}


function isUserNotAuth(nextState, replace) {
  if (typeof window !== 'undefined') {
    if (window.tree.get('loggedIn')) {
      replace({
        state: {
          pathname: '/',
          nextPathname: nextState.location.pathname
        }
      })
    }
  }
}

module.exports = (
  <Route name="Home" path="/" component={App} >
   <IndexRoute name="Index" component={Index} />
   <Route name="Feature" path="/feature" component={Feature} />
   <Route name="About" path="/about" component={About} />
   <Route name="Login" path="/login" component={Login} onEnter={isUserNotAuth} />
   <Route name="Dashboard" path="/dashboard" component={Dashboard} onEnter={isUserAuth}/>
  </Route>
)


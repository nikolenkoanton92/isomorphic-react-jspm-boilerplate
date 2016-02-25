var React = require('react')
var Link = require('react-router').Link
var mixins = require('baobab-react/mixins')
var xhr = require('xhr')
var actions = require('../../actions')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    loggedIn: ['loggedIn']
  },
  actions: {
    logout: actions.logout,
    unSetUser: actions.unSetUser
  },
  handleLogout: function() {
    var self = this
    xhr({
      method: 'POST',
      uri: '/logout'
    }, function(err, resp, body) {
      if (err) {
        return false
      } else {
        self.actions.logout()
        self.actions.unSetUser()
        self.context.router.push('/login')
      }
    })
  },
  render: function() {
    var navLinks = this.state.loggedIn ?
      (
      <div>
      <ul className="nav navbar-nav">
        <li><Link to="/">Index</Link></li>
        <li><Link to="/feature">Feature</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <form className="navbar-form navbar-right" onSubmit={this.handleLogout}>
        <button type="submit" className="btn btn-default">Logout</button>
        </form>
        </div>
      )
      : (
      <div>
      <ul className="nav navbar-nav">
        <li><Link to="/">Index</Link></li>
        <li><Link to="/feature">Feature</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
        </div>
      )
    return (
      <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
      {navLinks}
      </div>
    </nav>
      )
  }
})


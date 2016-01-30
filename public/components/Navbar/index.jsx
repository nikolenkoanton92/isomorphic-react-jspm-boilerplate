var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <ul className="nav navbar-nav">
        <li><a href='/'>Index</a></li>
        <li><a href='/feature'>Feature</a></li>
        <li><a href='/about'>About</a></li>
        </ul>
      </div>
    </nav>
      )
  }
})

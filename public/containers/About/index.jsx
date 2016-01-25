var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">About Page</h2>
          <p className="text-center">Just example of about page for show how <b>react-router</b> works</p>
          <p className="text-center">Also, I leave here a link to my <a href="https://github.com/nikolenkoanton92">Github Profile</a></p>
        </div>
      </div>
      )
  }
})

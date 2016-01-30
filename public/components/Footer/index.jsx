var React = require('react')
require('./style.css!')

module.exports = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <div className="container">
          <p className="text-muted">Boilerplate footer, also this bootstrap sticky footer :)</p>
        </div>
      </div>
      )
  }
})

var React = require('react')

module.exports = React.createClass({
  componentDidMount: function() {
    require('./style.css!')
  },
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

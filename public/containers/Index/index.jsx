var React = require('react')
var mixins = require('baobab-react/mixins')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    title: ['title']
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">{this.state.title}</h2>
          <p className="text-center">This is example of starting project example, includes
            <a href="/feature"> this feature</a>
          </p>
        </div>
      </div>
      )
  }
})

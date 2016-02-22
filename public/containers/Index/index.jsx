var React = require('react')
var mixins = require('baobab-react/mixins')
var xhr = require('xhr')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    title: ['title']
  },
  componentDidMount: function() {
    this.fetchIndexData()
  },
  fetchIndexData: function() {
    var self = this
    xhr({
      method: 'GET',
      uri: '/',
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(err, resp, body) {
      if (err) {
        return false
      } else {
        var data = JSON.parse(body)
        self.cursors.title.set(data.title)
      }
    })
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

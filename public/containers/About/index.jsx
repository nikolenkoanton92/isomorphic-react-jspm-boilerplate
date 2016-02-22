var React = require('react')
var mixins = require('baobab-react/mixins')
var xhr = require('xhr')

module.exports = React.createClass({
  mixins: [mixins.branch],
  cursors: {
    title: ['title']
  },
  componentDidMount: function() {
    this.fetchAboutData()
  },
  fetchAboutData: function() {
    var self = this
    xhr({
      method: 'GET',
      uri: '/about',
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
          <p className="text-center">Just example of about page for show how <b>react-router</b> works</p>
          <p className="text-center">Also, I leave here a link to my <a href="https://github.com/nikolenkoanton92">Github Profile</a></p>
        </div>
      </div>
      )
  }
})

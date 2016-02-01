var React = require('react')
var xhr = require('xhr')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: ''
    }
  },
  componentDidMount: function() {
    this.page = require('page')
  },
  handleUsernameChange: function(event) {
    this.setState({
      username: event.target.value
    })
  },
  handlePasswordChange: function(event) {
    this.setState({
      password: event.target.value
    })
  },
  handleSubmitLogin: function(event) {
    event.preventDefault()
    var username = this.state.username.trim()
    var password = this.state.password.trim()

    if (!username || !password) {
      return false
    }

    var self = this

    xhr({
      method: 'POST',
      uri: '/login',
      json: {
        username: username,
        password: password
      }
    }, function(err, response, body) {
      if (err || body === 'Unauthorized') {
        return false
      } else {
        self.page.redirect('/')
      }
    })

  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Login</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.handleSubmitLogin}>
              <fieldset>
              <div className="form-group">
                <input className="form-control" onChange={this.handleUsernameChange}  type="text" name="username" placeholder="Your username" />
              </div>
              <div className="form-group">
                <input className="form-control" onChange={this.handlePasswordChange} type="password" name="password" placeholder="Your password" />
              </div>
              <button className="btn btn-lg btn-success btn-block" type="submit">Login</button>
              </fieldset>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
      )
  }
})

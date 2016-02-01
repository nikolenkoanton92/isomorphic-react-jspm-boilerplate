var React = require('react')

module.exports = React.createClass({
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
              <form>
              <fieldset>
              <div className="form-group">
                <input className="form-control"  type="text" name="username" placeholder="Your username" />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Your password" />
              </div>
              <input className="btn btn-lg btn-success btn-block" type="submit" value="Login" />
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

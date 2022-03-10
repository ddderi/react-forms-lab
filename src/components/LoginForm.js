import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    // this.handleChangeUser = this.handleChangeUser.bind(this)
    // this.handleChangePass = this.handleChangePass.bind(this)
    
  }

  handleChangeUser = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePass = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  

  render() {
    return (
      <form onSubmit={e => {e.preventDefault();this.state.username.length>1 && this.state.password.length>1 ? this.props.handleLogin(this.state.username, this.state.password): console.log('fields empty')}} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChangeUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChangePass}/>
          </label>
        </div>
        <div>
        <button type="submit"  >Log in</button>
        </div>
      </form>
    );
  }
}


export default LoginForm;

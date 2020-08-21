import React, { Component} from 'react';
import  './LoginTemplate.css';

class LoginTemplate extends Component {

  state = { text: '' };

  // submit button 누르면 로그인 처리가 되고 todos 페이지를 뿌리도록 처리
  doLogin = () => {
    // console.log(this.props);
    // 로그인 검사 로직을 bacekEnd에서 검사받는다..
    this.props.handlePageType('todos');
  };



  render() {
    //console.log(this.props);
    /*
      1. submit 버튼을 누르면 todos 페이지로 전환하게 하자
    */
    return (
      <main className="login-form">
        <h1>Login</h1>
    		<input type="text" name="username" placeholder="Username" required/>
				<input type="password" name="password" placeholder="Password" required/>
        <input type="submit" onClick={this.doLogin}/>
		   </main>

    );
  }
}
export default LoginTemplate;

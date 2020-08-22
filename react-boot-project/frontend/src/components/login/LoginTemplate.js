import React, { Component} from 'react';
import  './LoginTemplate.css';
import axios from 'axios';

class LoginTemplate extends Component {
  // 초기화
  state = {};

  // subutton 누르면 로그인 처리가 되고 todos 페이지를 뿌리도록 처리
  doLogin = async () => {
    // 유저정보 체크
    const {user} = this.state;

    if( user === undefined) {
      alert("유저정보를 입력해주세요.");
      return;
    }
    const response = await axios({
      method : 'post',
      url : '/login',
      header : {
        'Content-Type': 'application/json'
      },
      data : {
        "username" : user.username,
        "password" : user.password
      }
    });

    if (response.data.indexOf("400") > -1) {
      alert("로그인에 실패하였습니다.");
      return;
    }

    // console.log(this.props);
    // 로그인 검사 로직을 bacekEnd에서 검사받는다..
    // 성공시 todos UI 보여주게 state 변경후, App Component에게 전달
    this.props.handlePageType('todos');
  };

  doChange = (e) => {
    // state -> user 아래의 변수에 값 할당
    // 태그 이름을 쪼개어, state 변수에 할당한다.
    const dataTypeList = e.target.name.split(".");
    const value = e.target.value;
    const dataTypeLeng = dataTypeList.length;
    let currentDataType = this.state;
    for (let i=0;i<dataTypeLeng;i++){
      let dataType = dataTypeList[i];
      if (i === (dataTypeLeng-1)) {
          // 변수값 입력
          currentDataType[dataType] = value;
          continue;
      }

      if (currentDataType[dataType] === undefined ) {
          currentDataType[dataType]= {};
      }
      currentDataType = currentDataType[dataType];
    }
  };

  render() {
    const {user} = this.state;
    //console.log(this.props);
    /*
      1. submit 버튼을 누르면 todos 페이지로 전환하게 하자
    */
    return (
      <main className="login-form">
        <h1>Login</h1>
    		<input type="text" name="user.username" placeholder="Username" onChange={this.doChange}/>
				<input type="password" name="user.password" placeholder="Password" onChange={this.doChange}/>
        <input type="submit" onClick={this.doLogin}/>
		   </main>

    );
  }
}
export default LoginTemplate;

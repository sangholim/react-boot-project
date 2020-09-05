/*
 * import: 외부 모듈 로드시 사용.
           ECMA6 이후 지원.
           {} 변수 이름을 지정
           from : xxx 의 파일 소스를 로딩
            (파일의 형식에 제한 받지 않음)
 */
import React, { Component} from 'react';
import TodosManager from './components/todos/TodosManager'
//import LoginTemplate from './components/login/LoginTemplate'
import UserRegisterTemplate from './components/userRegister/UserRegisterTemplate'
import Header from './components/header/Header'

class App extends Component {

  state = {
    currentCmp : 'login'
  }

  handlePageType = (currentCmp) => {
    this.setState(
      {currentCmp : currentCmp}
    );
  }

  //마운트 될때 실행
  componentDidMount() {
    const userInfo = window.sessionStorage.getItem("userInfo");
    const currentCmp = window.sessionStorage.getItem("currentCmp");

    if (userInfo === null || currentCmp === null) {
      return;
    }
    this.setState({currentCmp : currentCmp});

  }

  render() {
    return (
      <Header></Header>
    );
    /*
    const {currentCmp } = this.state;

    if (currentCmp === 'userRegister') {
      return <UserRegisterTemplate handlePageType = {this.handlePageType}/>;
    }

    return (
      <TodosManager></TodosManager>
    );
    */
  }
}
export default App;

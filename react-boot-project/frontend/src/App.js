/*
 * import: 외부 모듈 로드시 사용.
           ECMA6 이후 지원.
           {} 변수 이름을 지정
           from : xxx 의 파일 소스를 로딩
            (파일의 형식에 제한 받지 않음)
 */
import React, { Component} from 'react';
import TodosManager from './components/todos/TodosManager'

class App extends Component {
  render() {
    return (
      <TodosManager></TodosManager>
    );
  }
}
export default App;

/*
 * import: 외부 모듈 로드시 사용.
           ECMA6 이후 지원.
           {} 변수 이름을 지정
           from : xxx 의 파일 소스를 로딩
            (파일의 형식에 제한 받지 않음)
 */
import React, { Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:8080/'
        })
    );
};

class App extends Component {
  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input : '',
    todos : [
      {id: 0, text:' 리액트 소개', checked : false},
      {id: 1, text:' 리액트 소개', checked : true},
      {id: 2, text:' 리액트 소개', checked : false},

    ]
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value // 변경될 input 값
    });
  }

  handleCreate = () => {
    const { input, todos }  = this.state;
    this.setState({
      input: '', // value 초기화
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handlekeyPress = (e) => {
    // 키 누를때 이벤트
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    // 파라미터로 받은 id를 가지고 아템을을 찾음
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // index todo데이터
    const netxTodos = [...todos]; // 배열 복사
    netxTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: netxTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    // 배열안의 원소를 모두 제곱하기
    const numbers = [1,2,3,4,5];
    const squared = numbers.map(number => number * number);
    const { input,todos } = this.state;
    console.log("test");
    // input = this.state.input
    // todos = this.state.todos
    const {
      handleChange,
      handleCreate,
      handlekeyPress,
      handleToggle,
      handleRemove
    } = this;
    return (
      <TodoListTemplate form={(
        <Form
          value = {input}
          onKeyPress = {handlekeyPress}
          onChange = {handleChange}
          onCreate = {handleCreate}
        />)}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </TodoListTemplate>
    );
  }
}
export default App;

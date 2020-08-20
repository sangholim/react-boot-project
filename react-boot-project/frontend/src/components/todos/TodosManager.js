/*
 * import: 외부 모듈 로드시 사용.
           ECMA6 이후 지원.
           {} 변수 이름을 지정
           from : xxx 의 파일 소스를 로딩
            (파일의 형식에 제한 받지 않음)
 */
import React, { Component} from 'react';
import TodoListTemplate from './TodoListTemplate';
import Form from '../Form';
import TodoItemList from './TodoItemList';
import axios from 'axios';

class TodosManager extends Component {

  state = {
    input : '',
    todos : [
    ]
  }

  handleChange = (e) => {
    this.setState({
      input : e.target.value // 변경될 input 값
    });
  }
  // backEnd에 데이터 추가, state에 추가
  handleCreate = async () => {
    try {
          const {  input, todos }  = this.state;
          //backEnd에 todo 추가 요청
          const response = await axios.get( '/insertTodo', {
            params: {
              text : input
            }
          } );
          // 요청후 state에 추가
          this.setState({
            input: '', // value 초기화
            todos: todos.concat({
              // id는 db에서 생성
              id : response.data,
              text: input,
              checked: false
            })
          });
        } catch (e) {
          console.log(e);
        }
    };

  // backEnd에 데이터 추가, state에 제거
  handleRemove = async (id) => {
    try {
      const { todos } = this.state;
      //backEnd에 todo를 제거 요청
      const response = await axios.get( '/deleteTodo', {
        params: {
          id : id,
        }
      });
      // state에서 제거된 todo를 없앤후 재배열화
      this.setState({
        todos: todos.filter(todo => todo.id !== id)
      });
      } catch (e) {
        console.log(e);
      }
    };

  handlekeyPress = (e) => {
    // 키 누를때 이벤트
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  //로딩 //예제로 쓸 데이터
  loadingData = async () => {
    try {
      const response = await axios.get( '/todosList' );
      this.setState(
        {
          todos: response.data,
        }
      );
        } catch (e)
        {
          console.log(e);
         }
    };

  //마운트 될때 실행
  componentDidMount() {
    const { loadingData } = this;
    loadingData();
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

  render() {
    // 배열안의 원소를 모두 제곱하기
    const numbers = [1,2,3,4,5];
    const squared = numbers.map(number => number * number);
    const { input,todos } = this.state;
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
export default TodosManager;

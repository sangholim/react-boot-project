import React, { Component} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';




class TodoItemList extends Component {

  /*
  이유: Form Component에 있는 input값을 추가하지 않고 변경만 해도
        TodoItem이 render 함수를 호출하게된다.
        불필요하게 render를 막기위해 shouldComponentUpdate
        내장 react method를 구현해서 해결 가능하다.
  */
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
      // this.props: 상위 콤포넌트에서 내려받은 데이터들
      const { todos, onToggle, onRemove } = this.props;
      //const {todoList} =this.state;
      // javascript map: (xx,yy,zz..) 의 인자들을 이용하여, 새로운 배열을 생성한다.
      const todoList =
        todos.map(
        ({id, text, checked}) => (
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            onToggle={onToggle}
            onRemove={onRemove}
            key={id}
          />
        )
      );

      return (
        <div>
          {todoList}
        </div>
      );
  }
}

export default TodoItemList;

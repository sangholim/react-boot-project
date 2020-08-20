/*
  import xxx(class) from yyy (파일, dir)
*/
import React from 'react';
import './TodoListTemplate.css';
/*
  TodoListTemplate에 사용된 용법 설명
   ({})  => {};
   ({props}) => {구현}
   --> 다른 js 에서 TodoListTemplate comp 사용시에는
      <TodoListTemplate>구현</TodoListTemplate> 와 같이 사용됨
*/
const TodoListTemplate = ({form, children}) => {
    return (
      <main className="todo-list-template">
        <div className="title">
          오늘 할 일
        </div>
        <section className="form-wrapper">
          {form}
        </section>
        <section className="todos-wrapper">
          { children }
        </section>
      </main>
    );
};

export default TodoListTemplate;

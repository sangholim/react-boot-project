import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
이중 호출(Double-Invoke)되는 함수
클래스 컴포넌트의 constructor, render 그리고 shouldComponentUpdate
클래스 컴포넌트의 getDrivedStateFromProps static 메서드
함수 컴포넌트 바디
State updater 함수(setState 의 첫 번째 인자)
useState, useMemo, useReducer 에 전달되는 함수
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

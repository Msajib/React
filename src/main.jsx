import React from 'react'
import ReactDOM from 'react-dom/client'
import './Todo/CSS/Todo.css'
import Todo from './Todo/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Todo />
  </React.StrictMode>,
)

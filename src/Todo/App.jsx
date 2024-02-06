import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems';
let todoCounter = 0
const App = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)

  const add = () =>{
    setTodos([...todos,{no:todoCounter++,text:inputRef.current.value, display:""}])
    inputRef.current.value = "";
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  },[])

  useEffect(()=>{
    setTimeout(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    },1000)
  },[todos])

  return (
    <div className='todo'>
      <div className="todo-header">
        To-Do Lists
      </div>
      <div className="todo-add">
        <input ref={inputRef} type="text" placeholder='Add your task' name="" className='todo-input' />
        <div className="todo-add-btn" onClick={()=>{add()}}>Add</div>
      </div>
      <div className="todo-lists">
        <ul className='todo-order'>
        {todos.map(
          (item,index) => {
            return <TodoItems key={index} setTodos={setTodos} id={item.no} text={item.text} display={item.display} />
          }
        )}
        </ul>
      </div>
    </div>
  )
}

export default App

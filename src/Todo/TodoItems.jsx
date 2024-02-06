import './CSS/TodoItems.css'

const TodoItems = ({id,key,text,display, setTodos}) => {
  const todoRemove = (id) =>{
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((item) => item.no !== id);
    setTodos(data);
  }

  const itemCheck = (id) => {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = todos.map(item =>{
      if(item.no === id){
        item.display = 'todo-selected';
      }
      return item;
    })
    setTodos(todos)
  }
  return (
    <div className='todo-container'>
    
      <div className="todo-item-lists">
        <div className="todo-items">
          <li className={display} key={key} id={id}>{text} 
            <span className='btn btn-success btn-right' onClick={() => {itemCheck(id)}}>Check</span>
            <span className='btn btn-danger btn-right' onClick={() => {todoRemove(id)}}>Remove</span>
          </li> 
        </div>
      </div>
    </div>
  )
}

export default TodoItems

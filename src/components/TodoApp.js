import {React,useState} from 'react'

const TodoApp = () => {
    const [todos, setTodos] = useState([]); 
    const [todo, setTodo] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [indexVal, setindexVal] = useState();
    const add = (e)=>{
      if(todo == ''){
       e.disabled = true
      }
      else{
        if (isEdit) {
          // editing 
          todos[indexVal] = todo
          setTodos([...todos])
          setIsEdit(false)
          setTodo('')
        } else {
          //add
          setTodos([...todos, todo])
          setTodo('')
        }
      }
      
    }
    const delAll = ()=>{
        setTodos([]);
    } 
    const delTodo = (i)=>{
      todos.splice(i, 1)
      setTodos([...todos])
    }
    const editTodo = (i) => {
      setTodo(todos[i])
      setIsEdit(true)
      setindexVal(i)
    }
    
  return (
    <>
     <div id="todos">
        <div className="heading">
            <h1>Add Todo List</h1>
        </div>
        <div className="todo-input-container">
            <input id="todoItem" value={todo} onChange={(e)=>setTodo(e.target.value)} className="todo_input" type="text" placeholder="Add Task..."/>
            <i className="fas fa-plus add-item" onClick={(e)=>add(e)}></i>
            <i className="fas fa-trash-alt add-item deleteBtn" onClick={delAll}></i>
        </div>  
    </div>
    <div className="todo-list-container">
    {todos.map((todo,i)=>(
 <ul key={i} id="todoList">
        <li className='todoList'>{todo}
          <i className='fas fa-edit editBtn' onClick={()=>editTodo(i)}></i>
          <i className='fas fa-trash-alt  delBtn' onClick={()=>delTodo(i)}></i>
        </li>
      </ul>
   ))} 
</div>
   
   </>
  )
}

export default TodoApp
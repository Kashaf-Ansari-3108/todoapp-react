import { React, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [indexNumber, setIndexNumber] = useState(null);
  const [updateInput, setupdateInput] = useState("");

  const add = (e) => {
    if (todo == "") {
      e.disabled = true;
    } else {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const delAll = () => {
    setTodos([]);
  };
  const delTodo = (i) => {
    todos.splice(i, 1);
    setTodos([...todos]);
  };
  const updateTodo = (i, e) => {
    if (updateInput == "") {
      e.disabled = true;
    } else {
      todos.splice(i, 1, updateInput);
      setTodos([...todos]);
      setIndexNumber(null);
      setupdateInput("");
    }
  };
  const editTodo = (i) => {
    setupdateInput(todos[i]);
  };

  return (
    <>
      <div id="todos">
        <div className="heading">
          <h1>Add Todo List</h1>
        </div>
        <div className="todo-input-container">
          <input
            id="todoItem"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="todo_input"
            type="text"
            placeholder="Add Task..."
          />
          <i className="fas fa-plus add-item" onClick={(e) => add(e)}></i>
          <i
            className="fas fa-trash-alt add-item deleteBtn"
            onClick={delAll}
          ></i>
        </div>
      </div>
      <div className="todo-list-container">
        {todos.map((todo, i) => (
          <ul key={i} id="todoList">
            {indexNumber == i ? (
              <>
                <div className="updateInput">
                  <input
                    autoFocus
                    className="update"
                    value={updateInput}
                    onChange={(e) => setupdateInput(e.target.value)}
                    type="text"
                  />
                  <i
                    onClick={(e) => updateTodo(i, e)}
                    className="fas fa-plus add-item updateBtn"
                    aria-hidden="true"
                  ></i>
                </div>
              </>
            ) : (
              <li className="todoList">
                {todo}
                <i
                  className="fas fa-edit editBtn"
                  onClick={() => {
                    setIndexNumber(i);
                    editTodo(i);
                  }}
                ></i>
                <i
                  className="fas fa-trash-alt  delBtn"
                  onClick={() => delTodo(i)}
                ></i>
              </li>
            )}
          </ul>
        ))}
      </div>
    </>
  );
};

export default TodoApp;

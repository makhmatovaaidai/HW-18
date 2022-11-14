import React, { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import './App.css'
function App() {
  const [todo, setTodo] = useState("");
  const BASE_URL = "https://hw-18-e23a8-default-rtdb.firebaseio.com/todo.json";

  const { todos, addItem, getTodo,removeItemHandler } = useFetch([], BASE_URL);

  const addTodoHendler = (e) => {
    e.preventDefault();
    addItem({ text: todo });
    setTodo("");
  };
  useEffect(() => {
    getTodo();
  }, []);
  const demoveItemHandler =(todoId)=>{
    return()=>{
      removeItemHandler(todoId)
      getTodo(todoId)
    }
  }
  return (
    <div>
      <form onSubmit={addTodoHendler}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>add</button>
      </form>
      <div>
        {todos.map((item) => (
          <li key={item.id}>{item.text}
          <button onClick={demoveItemHandler(item.id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import {v4 as uuidv4} from 'uuid';
import "./styles.css";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setNewTodoList] = useState([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  function addTodoItem(e) {
    e.preventDefault();
    setNewTodoList((currentTodos) => {
      return [...currentTodos, { id: uuidv4(), name: todoName }];
    });
  }


  return (
    <>
      <ul id="list">
        {todoList.map(todo => <TodoItem key={todo.id} name={todo.name} />)}
      </ul>
      <TodoForm setTodoName={setTodoName} addTodoItem={addTodoItem} />
    </>
  );
}
export default App;

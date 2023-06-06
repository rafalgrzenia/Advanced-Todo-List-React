import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import "./styles.css";

function App() {
  const [newTodoName, setnewTodoName] = useState("");
  const [todoList, setNewTodoList] = useState([]);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  function addTodoItem(e) {
    e.preventDefault();
    setNewTodoList((currentTodos) => {
      return [...currentTodos, { name: newTodoName }];
    });
  }

  return (
    <>
      <ul id="list">
        {todoList.map(todo => <TodoItem name={todo.name} />)}
      </ul>
      <TodoForm setnewTodoName={setnewTodoName} addTodoItem={addTodoItem} />
    </>
  );
}
export default App;

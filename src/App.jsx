import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
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
      return [...currentTodos, { name: todoName }];
    });
  }

  return (
    <>
      <ul id="list">
        {todoList.map(todo => <TodoItem name={todo.name} />)}
      </ul>
      <TodoForm setTodoName={setTodoName} addTodoItem={addTodoItem} />
    </>
  );
}
export default App;

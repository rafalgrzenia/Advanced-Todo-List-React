import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { FilterTodoList } from "./FilterTodoList";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setNewTodoList] = useState([]);


  function addTodoItem(e) {
    e.preventDefault();
    setNewTodoList((currentTodos) => {
      return [...currentTodos, { id: uuidv4(), name: todoName }];
    });
  }

  function deleteTodoItem(todoId) {
    setNewTodoList((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }


  return (
    <>
      <FilterTodoList/>

      <ul id="list">
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} deleteTodoItem={deleteTodoItem} />
        ))}
      </ul>
      <TodoForm setTodoName={setTodoName} addTodoItem={addTodoItem} />
    </>
  );
}
export default App;

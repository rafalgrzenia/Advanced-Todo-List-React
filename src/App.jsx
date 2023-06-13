import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";
import { FilterTodoList } from "./FilterTodoList";

function App() {
  const TODOS_LIST_KEY = "TODOS_LIST";

  const [todoName, setTodoName] = useState("")
  const [todoList, setNewTodoList] = useState(() => {
    const localStorageValue = localStorage.getItem(TODOS_LIST_KEY);
    if (!localStorageValue) {
      return [];
    } else {
      return JSON.parse(localStorageValue);
    }
  });
  const [filterName, setFilterName] = useState("");
  const [hideCompletedTodo, setHideCompletedTodo] = useState(false);

  useEffect(() => {
    localStorage.setItem(TODOS_LIST_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const filteredTodos = todoList.filter((todo) => {
    if (hideCompletedTodo && todo.completed) return;
    return todo.name.includes(filterName);
  });

  function addTodoItem(e) {
    e.preventDefault();
    if (todoName === "") return;
    setNewTodoList((currentTodos) => {
      return [
        ...currentTodos,
        { id: uuidv4(), name: todoName, completed: false },
      ];
    });

    setTodoName("");
  }

  function toggleTodo(todoId, completed) {
    setNewTodoList((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoId) return { ...todo, completed };
        return todo;
      });
    });
  }

  function deleteTodoItem(todoId) {
    setNewTodoList((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  }

  return (
    <>
      <FilterTodoList
        filterName={filterName}
        setFilterName={setFilterName}
        hideCompletedTodo={hideCompletedTodo}
        setHideCompletedTodo={setHideCompletedTodo}
      />
      <ul id="list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            deleteTodoItem={deleteTodoItem}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
      <TodoForm
        todoName={todoName}
        setTodoName={setTodoName}
        addTodoItem={addTodoItem}
      />
    </>
  );
}
export default App;

import { AddTodo } from "./AddTodo";
import { ToDoItem } from "./TodoItem";
import "./styles.css";

function App() {
 return (
  <>
  <ul id="list">
    <ToDoItem />
  </ul>
  <AddTodo />
  </>
 )
}
export default App;

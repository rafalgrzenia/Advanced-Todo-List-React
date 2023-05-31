export function AddTodo() {
  return (
    <form id="new-todo-form">
      <label for="todo-input">New Todo</label>
      <input type="text" id="todo-input" />
      <button>Add Todo</button>
    </form>
  );
}

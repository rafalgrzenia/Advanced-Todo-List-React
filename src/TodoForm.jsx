export function TodoForm({ addTodoItem, setTodoName }) {
  return (
    <form onSubmit={addTodoItem} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

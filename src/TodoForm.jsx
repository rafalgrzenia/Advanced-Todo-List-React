export function TodoForm({ addTodoItem, setnewTodoName }) {
  return (
    <form onSubmit={addTodoItem} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        onChange={(e) => setnewTodoName(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

export function TodoForm({ addTodoItem, todoName, setTodoName }) {
  return (
    <form onSubmit={addTodoItem} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input
        type="text"
        id="todo-input"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

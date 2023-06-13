export function FilterTodoList({
  filterName,
  setFilterName,
  hideCompletedTodo,
  setHideCompletedTodo
}) {
  return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
      </div>
      <label>
        <input value={hideCompletedTodo} onChange={e => setHideCompletedTodo(e.target.checked)} type="checkbox" />
        Hide Completed
      </label>
    </div>
  );
}

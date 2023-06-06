export function FilterTodoList({setFilteredTodoName}) {
  
    return (
    <div className="filter-form">
      <div className="filter-form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={e => setFilteredTodoName(e.target.value)}/>
      </div>
      <label>
        <input type="checkbox" />
        Hide Completed
      </label>
    </div>
  );
}

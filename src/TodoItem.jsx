export function TodoItem() {
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input type="checkbox" data-list-item-checkbox />
        <span data-list-item-text>Item 1</span>
      </label>
      <button data-button-edit>Edit</button>
      <button data-button-delete>Delete</button>
    </li>
  );
}

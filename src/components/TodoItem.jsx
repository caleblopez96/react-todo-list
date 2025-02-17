export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`p-2 border rounded cursor-pointer flex justify-between items-center 
      ${todo.completed ? "line-through text-gray-400" : "text-black"}`}
      onClick={() => toggleTodo(todo.id)}
    >
      <span>{todo.text}</span>
      <button
        onClick={(event) => {
          event.stopPropagation();
          deleteTodo(todo.id);
        }}
        className="text-red-500"
      >
        🗑️
      </button>
    </li>
  );
}
